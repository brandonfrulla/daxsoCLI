
# DaxSo

Welcome to the Developer Acceleration eXperience for Smart Contract Organizations or DAXSO. This is an open-source CLI tool designed to help you start, build and deploy Web3 projects faster with (hopefully) better opinions and smoother developer experience.

DaxSo is a mono-repository powered by Turbo that houses a robust suite of applications and libraries related to blockchain technologies and front-end frameworks. It uses the power of TypeScript for static type-checking and enhanced developer productivity.

## Structure

The repository is structured into various applications and packages:

### Apps

- `blockchain`: Contains the smart contracts using OpenZeppelin and Truffle.
- `admin-app`: A TypeScript application for administrative tasks.
- `frontend-react`: A React application.
- `frontend-next`: A Next.js application.
- `frontend-svelte`: A Svelte application.
- `frontend-react-native`: A React Native application for mobile platforms.

### Packages

- `eslint-config-custom`: Custom ESLint configuration is used across all applications.

## Installation

This tool was built with pnpm and using pnpx is the preferred way of running it but all your package managers should work. If you run into trouble please open an issue.

```bash
npm install -g daxso-cli
```

or

```bash
npx daxso-cli
```

or

```bash
pnpx daxso-cli
```

Contributing
Contributions to DaxSo are welcome! Please read our contributing guidelines before getting started.

License Apache 2.0
