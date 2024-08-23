import { AgentSecret, cojsonInternals, CryptoProvider } from "cojson";
import {
    Account,
    AuthMethod,
    AuthResult,
    ID,
} from "jazz-tools";
import * as bip39 from "@scure/bip39";

type LocalStorageData = {
    accountID: ID<Account>;
    accountSecret: AgentSecret;
};

const localStorageKey = "jazz-logged-in-secret";

export class BrowserPassphraseAuth implements AuthMethod {
    constructor(
        public driver: BrowserPassphraseAuth.Driver,
        public wordlist: string[],
        public appName: string,
        // TODO: is this a safe default?
        public appHostname: string = window.location.hostname,
    ) {}

    async start(crypto: CryptoProvider): Promise<AuthResult> {
        if (localStorage[localStorageKey]) {
            const localStorageData = JSON.parse(
                localStorage[localStorageKey],
            ) as LocalStorageData;

            const accountID = localStorageData.accountID as ID<Account>;
            const secret = localStorageData.accountSecret;

            return {
                type: "existing",
                credentials: { accountID, secret },
                onSuccess: () => {
                    this.driver.onSignedIn({ logOut });
                },
                onError: (error: string | Error) => {
                    this.driver.onError(error);
                },
            } satisfies AuthResult;
        } else {
            return new Promise<AuthResult>((resolve) => {
                this.driver.onReady({
                    signUp: async (username, passphrase) => {
                        const secretSeed = bip39.mnemonicToEntropy(
                            passphrase,
                            this.wordlist,
                        );
                        const accountSecret =
                            crypto.agentSecretFromSecretSeed(secretSeed);
                        if (!accountSecret) {
                            this.driver.onError("Invalid passphrase");
                            return;
                        }

                        resolve({
                            type: "new",
                            creationProps: { name: username },
                            initialSecret: accountSecret,
                            saveCredentials: async (credentials) => {
                                localStorage[localStorageKey] = JSON.stringify({
                                    accountID: credentials.accountID,
                                    accountSecret: credentials.secret,
                                } satisfies LocalStorageData);
                            },
                            onSuccess: () => {
                                this.driver.onSignedIn({ logOut });
                            },
                            onError: (error: string | Error) => {
                                this.driver.onError(error);
                            },
                        });
                    },
                    logIn: async (passphrase: string) => {
                        const secretSeed = bip39.mnemonicToEntropy(
                            passphrase,
                            this.wordlist,
                        );
                        const accountSecret =
                            crypto.agentSecretFromSecretSeed(secretSeed);

                        if (!accountSecret) {
                            this.driver.onError("Invalid passphrase");
                            return;
                        }

                        const accountID = cojsonInternals.idforHeader(
                            cojsonInternals.accountHeaderForInitialAgentSecret(
                                accountSecret,
                                crypto,
                            ),
                            crypto,
                        ) as ID<Account>;

                        resolve({
                            type: "existing",
                            credentials: { accountID, secret: accountSecret },
                            onSuccess: () => {
                                localStorage[localStorageKey] = JSON.stringify({
                                    accountID,
                                    accountSecret,
                                } satisfies LocalStorageData);
                                this.driver.onSignedIn({ logOut });
                            },
                            onError: (error: string | Error) => {
                                this.driver.onError(error);
                            },
                        });
                    },
                });
            });
        }
    }
}

/** @category Auth Providers */
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace BrowserPassphraseAuth {
    export interface Driver {
        onReady: (next: {
            signUp: (username: string, passphrase: string) => Promise<void>;
            logIn: (passphrase: string) => Promise<void>;
        }) => void;
        onSignedIn: (next: { logOut: () => void }) => void;
        onError: (error: string | Error) => void;
    }
}

function logOut() {
    delete localStorage[localStorageKey];
}
