---
title: DAXSO Contribution Guidelines
description: Dealing with Smart Contracts
layout: ../../../layouts/docs.astro
lang: en
---

Thank you for considering contributing to the Developer Acceleration eXperience for Smart-Contract Organizations or `daxso` project. Your efforts to enhance our project are greatly appreciated. When engaging with our community, either through GitHub or other platforms, we request you to adhere to the following guidelines:

- Uphold a respectful, civil, and open-minded atmosphere.
- Before initiating a new pull request, explore the [issue tracker](https://github.com/Dax911/daxsoCLI/issues) to check for existing issues or solutions.
- When proposing code modifications based on personal opinions, ensure to first open an issue outlining the intended changes. Proceed with a pull request only after receiving approval from the maintainers.

## How to Contribute

### Prerequisites

To avoid investing time in changes that may have been previously declined or deemed unnecessary, begin by [opening an issue](https://github.com/Dax911/daxsoCLI/issues/new/choose) detailing the problem you intend to address.

### Contributing via Codesandbox

You can contribute to this documentation through codesandbox, which automatically executes all necessary setup commands. [![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/Dax911/daxsoCLI).

### Setting Up Your Environment Locally

_Some commands presume the installation of the Github CLI. If it is not yet installed, consider [installing it](https://github.com/cli/cli#installation). Alternatively, the Web UI can be used._

Start your contribution by forking the repository:

```bash
gh repo fork Dax911/daxsoCLI
```

Next, clone the forked repository to your local system:

```bash
gh repo clone <your-github-name>/daxsoCLI
```

This project utilizes [pnpm](https://pnpm.io) as its package manager. If not already installed, proceed with:

```bash
npm install -g pnpm
```

Follow this by installing the project dependencies:

```bash
pnpm install
```

### Implementing Your Changes

Our project is structured as a [Turborepo](https://turborepo.org/) monorepo. The CLI's code is housed in the `cli` directory, while the documentation is located in the `web` directory. You are now prepared to implement your changes.

During development, the following scripts might be beneficial:

```bash
| Command         | Description                                       |
| --------------- | ------------------------------------------------- |
| `pnpm dev:cli`  | Builds and starts the CLI in watch-mode           |
| `pnpm dev:www`  | Starts the development server for the docs w HMR  |
| `pnpm build:cli`| Builds the CLI                                    |
| `pnpm build:www`| Builds the docs                                   |
| `pnpm build`    | Builds CLI and docs                               |
| `pnpm format`   | Formats the code                                  |
| `pnpm lint`     | Lints the code                                    |
| `pnpm lint:fix` | Lints the code and fixes any errors               |
| `pnpm check`    | Checks for typeerrors, formatting and linting
```

## Commit Message Guidelines

To maintain a vibrant and expressive commit history, we encourage the use of gitmoji for commit messages. Utilize appropriate gitmojis as prefixes to your commit messages, representing the nature of the change. For instance:

```bash
git add <file> && git commit -m ":sparkles: introduce new feature"
```

Remember, the use of gitmoji not only makes the commit history more readable but also more visually informative.

### Branch and Issue Naming Convention

We maintain a consistent naming convention for branches and issues to streamline the tracking process. Utilize the format: `DAX-[Short_Descriptor]-[Issue Number]` when naming your branches and issues. This structure helps in organizing and identifying issues swiftly.

### Once Your Changes are Complete

Check that your code follows the project's style guidelines by running:

```bash
pnpm check
```

Please also make a manual, functional test of your changes.

If your change should appear in the changelog, i.e. it changes some behavior of either the CLI or the outputted application, it must be captured by `changeset` which is done by running

```bash
pnpm changeset
```

and filling out the form with the appropriate information. Then, add the generated changeset to git:

```bash
git add .changeset/*.md && git commit -m "chore: add changeset"
```

When all that's done, it's time to file a pull request to upstream:

**NOTE**: All pull requests should target the `next` branch. `main` has been feature-locked since 2022-10-06.

```bash
gh pr create --web
```

and fill out the title and body appropriately.

## Translations

To assist with translations, refer to the guidelines provided in the [contributing documentation for our docs](https://github.com/t3-oss/create-t3-app/blob/next/www/TRANSLATIONS.md).

## Credits

This document draws inspiration from the contribution guidelines of [cloudflare/wrangler2](https://github.com/cloudflare/wrangler2/blob/main/CONTRIBUTING.md).

---

Feel free to adjust as necessary, and thank you for fostering a collaborative and respectful community through the creation of these guidelines!
