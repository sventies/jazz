import { clsx } from "clsx";

export function GcmpLogo({
  monochrome,
  className,
}: {
  monochrome?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 557 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, "text-black dark:text-white")}
    >
      <g clipPath="url(#clip0_12197_1172)">
        <path
          d="M208.359 22.88V25.922C205.395 23.231 201.495 21.71 196.698 21.71C184.764 21.71 177.12 31.148 177.12 43.94C177.12 56.576 184.686 66.17 196.347 66.17C200.715 66.17 204.342 64.961 207.189 62.855V66.872C207.306 72.878 203.055 75.959 197.205 75.959C193.89 75.959 190.653 74.477 189.093 71.435L180.435 75.725C183.711 81.458 190.146 84.89 197.166 84.89C206.682 84.89 214.092 81.107 216.003 72.956C216.432 71.084 216.588 69.212 216.588 67.028V22.88H208.359ZM197.79 57.746C190.458 57.746 187.065 51.662 187.065 43.94C187.065 36.296 190.536 30.134 198.102 30.134C205.278 30.134 208.359 35.711 208.359 43.94C208.359 52.091 205.356 57.746 197.79 57.746ZM256.423 29.549C253.654 23.972 247.687 21.71 240.199 21.71C230.293 21.71 224.482 26.429 222.415 33.527L230.995 36.218C232.399 31.928 236.416 30.329 240.199 30.329C245.932 30.329 248.467 32.591 248.818 37.427C241.447 38.519 234.934 39.416 230.488 40.859C223.819 43.16 220.894 47.333 220.894 53.456C220.894 60.398 225.847 66.17 235.012 66.17C241.72 66.17 246.205 64.025 249.793 59.345V65H258.022V39.143C258.022 35.516 257.905 32.513 256.423 29.549ZM247.765 51.701C246.829 54.626 243.28 58.682 236.884 58.682C232.438 58.682 230.098 56.42 230.098 53.339C230.098 50.609 231.97 49.01 235.207 47.801C238.171 46.787 241.993 46.202 248.701 45.149C248.662 47.099 248.545 49.79 247.765 51.701ZM276.405 25.103C274.65 26.195 273.246 27.794 272.193 29.627V22.88H263.886V65H273.324V43.589C273.324 38.714 275.04 34.775 278.901 32.669C281.514 31.148 285.063 30.953 287.598 31.655V22.88C283.815 22.295 279.525 22.958 276.405 25.103ZM317.717 8.84V24.947C314.909 22.88 311.438 21.71 307.226 21.71C295.292 21.71 287.648 31.148 287.648 43.94C287.648 56.576 295.214 66.17 306.875 66.17C311.867 66.17 315.884 64.61 318.887 61.88V65H327.194V8.84H317.717ZM308.318 57.746C300.986 57.746 297.593 51.662 297.593 43.94C297.593 36.296 301.064 30.134 308.63 30.134C315.806 30.134 318.887 35.711 318.887 43.94C318.887 52.091 315.884 57.746 308.318 57.746ZM341.561 46.553H372.059C373.151 31.382 365.507 21.71 352.442 21.71C340.04 21.71 331.499 30.602 331.499 44.408C331.499 57.2 340.196 66.17 352.988 66.17C361.1 66.17 368.354 61.802 371.591 54.158L362.309 51.35C360.476 55.25 357.044 57.356 352.442 57.356C346.046 57.356 342.302 53.495 341.561 46.553ZM352.832 29.939C358.643 29.939 361.724 32.864 362.504 39.455H341.795C342.887 33.215 346.514 29.939 352.832 29.939ZM397.402 21.671C391.318 21.671 386.716 23.933 383.635 27.56V22.88H375.25V65H384.766V43.355C384.766 33.137 389.836 30.524 394.633 30.524C403.603 30.524 404.461 39.533 404.461 44.72V65H413.977V41.483C413.977 36.491 412.924 21.671 397.402 21.671ZM197.751 143.17C207.15 143.17 213.897 138.412 216.51 129.832L206.916 127.687C205.473 132.016 202.743 134.356 197.751 134.356C190.692 134.356 187.104 128.974 187.065 120.94C187.104 113.218 190.38 107.524 197.751 107.524C202.041 107.524 205.707 110.176 207.15 114.7L216.51 112.165C214.521 103.858 207.423 98.71 197.868 98.71C185.076 98.71 177.159 108.031 177.12 120.94C177.159 133.654 184.725 143.17 197.751 143.17ZM238.276 143.17C250.873 143.17 259.297 134.083 259.297 120.94C259.297 107.914 250.99 98.71 238.276 98.71C225.835 98.71 217.333 107.719 217.333 120.94C217.333 133.966 225.601 143.17 238.276 143.17ZM238.276 134.356C231.022 134.356 227.278 129.13 227.278 120.94C227.278 112.984 230.71 107.524 238.276 107.524C245.647 107.524 249.352 112.789 249.352 120.94C249.352 128.857 245.725 134.356 238.276 134.356ZM309.931 98.827C304.471 98.827 299.713 101.362 297.1 105.535C294.877 101.44 290.743 98.827 284.815 98.827C279.745 98.827 275.377 100.972 272.608 104.443V99.88H264.301V142H273.778V116.065C273.778 110.8 276.898 107.212 281.695 107.212C286.609 107.212 289.69 110.683 289.69 116.533V142H299.05V116.065C299.05 110.488 302.482 107.212 307.006 107.212C311.842 107.212 314.962 110.644 314.962 116.416V142H324.361V114.037C324.361 104.911 319.252 98.827 309.931 98.827ZM350.914 98.71C346.117 98.71 342.217 100.231 339.253 102.922V99.88H330.946V160.72H340.423V139.855C343.27 141.961 346.897 143.17 351.265 143.17C362.926 143.17 370.492 133.576 370.492 120.94C370.492 108.148 362.848 98.71 350.914 98.71ZM349.822 134.746C342.256 134.746 339.253 129.091 339.253 120.94C339.253 112.711 342.334 107.134 349.51 107.134C357.076 107.134 360.547 113.296 360.547 120.94C360.547 128.662 357.154 134.746 349.822 134.746ZM404.009 99.88V121.525C404.009 131.743 398.939 134.356 394.142 134.356C385.172 134.356 384.314 125.347 384.314 120.16V99.88H374.798V123.397C374.798 128.389 375.851 143.209 391.373 143.209C397.457 143.209 402.059 140.947 405.14 137.32V142H413.447V99.88H404.009ZM433.218 107.251H445.581V99.88H433.218V88.18H423.858V99.88H416.214V107.251H423.858V124.801C423.858 129.637 423.507 133.186 425.457 136.813C428.733 142.858 437.235 143.599 445.581 142V134.122C440.316 134.902 435.948 134.941 434.076 131.821C433.062 130.222 433.218 127.609 433.218 124.255V107.251ZM451.909 93.484H461.308V84.865H451.909V93.484ZM451.909 142H461.308V99.88H451.909V142ZM491.554 98.671C485.47 98.671 480.868 100.933 477.787 104.56V99.88H469.402V142H478.918V120.355C478.918 110.137 483.988 107.524 488.785 107.524C497.755 107.524 498.613 116.533 498.613 121.72V142H508.129V118.483C508.129 113.491 507.076 98.671 491.554 98.671ZM543.695 99.88V102.922C540.731 100.231 536.831 98.71 532.034 98.71C520.1 98.71 512.456 108.148 512.456 120.94C512.456 133.576 520.022 143.17 531.683 143.17C536.051 143.17 539.678 141.961 542.525 139.855V143.872C542.642 149.878 538.391 152.959 532.541 152.959C529.226 152.959 525.989 151.477 524.429 148.435L515.771 152.725C519.047 158.458 525.482 161.89 532.502 161.89C542.018 161.89 549.428 158.107 551.339 149.956C551.768 148.084 551.924 146.212 551.924 144.028V99.88H543.695ZM533.126 134.746C525.794 134.746 522.401 128.662 522.401 120.94C522.401 113.296 525.872 107.134 533.438 107.134C540.614 107.134 543.695 112.711 543.695 120.94C543.695 129.091 540.692 134.746 533.126 134.746Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M138.355 109.488H141.805C141.805 112.692 141.805 114.294 141.687 115.645C140.373 130.657 128.471 142.559 113.459 143.872C113.327 143.884 113.192 143.894 113.053 143.904C113.053 143.933 113.053 143.962 113.053 143.991H109.603C109.189 143.991 108.802 143.991 108.439 143.99C108.084 143.99 107.706 143.99 107.303 143.99H103.852C103.852 143.962 103.852 143.933 103.853 143.904C103.714 143.894 103.579 143.884 103.446 143.872C88.4342 142.559 76.5321 130.657 75.2187 115.645C75.1006 114.294 75.1006 112.692 75.1006 109.488H78.5508C91.3326 109.488 102.491 116.439 108.453 126.766C114.414 116.439 125.573 109.488 138.355 109.488Z"
          fill={monochrome ? "currentColor" : "#42BB69"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8467 64.2412H8.39648C8.39648 67.4452 8.39648 69.0472 8.51465 70.3978C9.82802 85.4098 21.7301 97.3119 36.7421 98.6253C36.8747 98.6369 37.0096 98.6473 37.1483 98.6567C37.1482 98.6857 37.1482 98.7146 37.1482 98.7435H40.5984C41.0345 98.7435 41.441 98.7435 41.8211 98.7432C42.1592 98.7434 42.5176 98.7434 42.8987 98.7434H46.3489C46.3489 98.7146 46.3489 98.6857 46.3488 98.6568C46.4875 98.6474 46.6224 98.637 46.755 98.6254C61.767 97.312 73.6691 85.4099 74.9824 70.3979C75.1006 69.0473 75.1006 67.4453 75.1006 64.2413H71.6504C58.8687 64.2413 47.7104 71.1916 41.7486 81.519C35.7868 71.1916 24.6284 64.2412 11.8467 64.2412Z"
          fill={monochrome ? "currentColor" : "#42BB69"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M78.5508 22.7266H75.1006C75.1006 25.9305 75.1006 27.5325 75.2187 28.8831C76.5321 43.8951 88.4342 55.7972 103.446 57.1106C103.579 57.1222 103.714 57.1327 103.853 57.1421C103.853 57.171 103.853 57.1999 103.853 57.2288H107.303C107.711 57.2288 108.094 57.2288 108.453 57.2285C108.812 57.2288 109.194 57.2288 109.603 57.2288H113.053C113.053 57.1999 113.053 57.171 113.053 57.1421C113.192 57.1327 113.327 57.1222 113.459 57.1106C128.471 55.7972 140.373 43.8951 141.687 28.8831C141.805 27.5325 141.805 25.9305 141.805 22.7266H138.355C125.573 22.7266 114.415 29.677 108.453 40.0046C102.491 29.677 91.3326 22.7266 78.5508 22.7266Z"
          fill={monochrome ? "currentColor" : "#42BB69"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M97.0317 74.9697C95.5587 74.9697 94.1437 75.218 92.8262 75.675C99.2185 79.0854 104.39 84.4836 107.515 91.0445C107.734 91.8835 108.035 92.6892 108.411 93.4521C108.434 93.3925 108.457 93.3331 108.48 93.2737C108.503 93.3332 108.526 93.3928 108.549 93.4524C108.925 92.689 109.226 91.8828 109.445 91.0431C112.57 84.4829 117.742 79.0851 124.133 75.675C122.816 75.218 121.401 74.9697 119.928 74.9697C114.928 74.9697 110.596 77.8304 108.48 82.0043C106.364 77.8304 102.032 74.9697 97.0317 74.9697Z"
          fill={monochrome ? "currentColor" : "#42BB69"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.3278 120.216C28.8547 120.216 27.4396 120.464 26.1221 120.921C32.5147 124.332 37.6862 129.73 40.8113 136.291C41.0302 137.13 41.3318 137.936 41.707 138.698C41.7299 138.639 41.7529 138.58 41.7761 138.52C41.7992 138.58 41.8222 138.639 41.8451 138.698C42.2203 137.936 42.5219 137.13 42.7408 136.291C45.8659 129.73 51.0374 124.332 57.43 120.921C56.1125 120.464 54.6974 120.216 53.2243 120.216C48.2243 120.216 43.8923 123.077 41.7761 127.251C39.6598 123.077 35.3278 120.216 30.3278 120.216Z"
          fill={monochrome ? "currentColor" : "#42BB69"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.3279 33.4541C28.8548 33.4541 27.4396 33.7024 26.1221 34.1595C32.5143 37.5696 37.6856 42.9676 40.8108 49.5282C41.0298 50.3677 41.3316 51.1737 41.7071 51.937C41.73 51.8774 41.753 51.8179 41.7762 51.7585C41.7994 51.8178 41.8224 51.8771 41.8452 51.9366C42.2204 51.1739 42.522 50.3686 42.7409 49.5298C45.8659 42.9686 51.0376 37.57 57.4302 34.1595C56.1126 33.7024 54.6974 33.4541 53.2242 33.4541C48.2242 33.4541 43.8924 36.3147 41.776 40.4886C39.6597 36.3147 35.3279 33.4541 30.3279 33.4541Z"
          fill={monochrome ? "currentColor" : "#42BB69"}
        />
      </g>
      <defs>
        <clipPath id="clip0_12197_1172">
          <rect width="557" height="164" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
