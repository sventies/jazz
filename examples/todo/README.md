# Jazz Todo List Example

Live version: https://todo-demo.jazz.tools/

## Installing & running the example locally

(this requires `pnpm` to be installed, see [https://pnpm.io/installation](https://pnpm.io/installation))

Start by checking out `jazz`

```bash
git clone https://github.com/gardencmp/jazz.git
cd jazz/examples/todo
pnpm pack --pack-destination /tmp
mkdir -p ~/jazz-examples/todo # or any other directory
tar -xf /tmp/jazz-example-todo-* --strip-components 1 -C ~/jazz-examples/todo
cd ~/jazz-examples/todo
```

This ensures that you have the example app without git history and independent of the Jazz multi-package monorepo.

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

## Structure

-   [`src/basicComponents`](./src/basicComponents): simple components to build the UI, unrelated to Jazz (uses [shadcn/ui](https://ui.shadcn.com))
-   [`src/components`](./src/components/): helper components that do contain Jazz-specific logic, but aren't very relevant to understand the basics of Jazz and CoJSON
-   [`src/1_schema.ts`](./src/1_schema.ts),
    [`src/2_main.tsx`](./src/2_main.tsx),
    [`src/3_NewProjectForm.tsx`](./src/3_NewProjectForm.tsx),
    [`src/4_ProjectTodoTable.tsx`](./src/4_ProjectTodoTable.tsx): the main files for this example, see the walkthrough below

## Walkthrough

### Main parts

1. Defining the data model with CoJSON: [`src/1_schema.ts`](./src/1_schema.ts)

2. The top-level provider `<WithJazz/>` and routing: [`src/2_main.tsx`](./src/2_main.tsx)

3. Creating a new todo project: [`src/3_NewProjectForm.tsx`](./src/3_NewProjectForm.tsx)

4. Reactively rendering a todo project as a table, adding and editing tasks: [`src/4_ProjectTodoTable.tsx`](./src/4_ProjectTodoTable.tsx)

### Helpers

-   (not yet explained) Creating Invite Links/QR codes with `<InviteButton/>`: [`src/components/InviteButton.tsx`](./src/components/InviteButton.tsx)

This is the whole Todo List app!

## Questions / problems / feedback

If you have feedback, let us know on [Discord](https://discord.gg/utDMjHYg42) or open an issue or PR to fix something that seems wrong.

## Configuration: sync server

By default, the example app uses [Jazz Cloud](https://jazz.tools/cloud) (`wss://cloud.jazz.tools`) - so cross-device use, invites and collaboration should just work.

You can also run a local sync server by running `npx jazz-run sync` and adding the query param `?sync=ws://localhost:4200` to the URL of the example app (for example: `http://localhost:5173/?peer=ws://localhost:4200`), or by setting the `sync` parameter of the `<Jazz.Provider>` provider component in [./src/2_main.tsx](./src/2_main.tsx).
