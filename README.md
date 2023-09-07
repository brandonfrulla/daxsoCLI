# Developer Acceleration Experience (DAX)

Welcome to the Developer Acceleration eXperience for Smart Contract Organizations or DAX. This is an open-source CLI tool designed to help you start, build and deploy Web3 projects faster with (hopefully) better opinions and smoother developer experience.

DAX is a mono-repository powered by Turbo that houses a robust suite of applications and libraries related to blockchain technologies and front-end frameworks. It uses the power of TypeScript for static type-checking and enhanced developer productivity.

## NPM Instructions (Not Ready Yet)

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

## DaxCLI: A CLI Tool for Consensys

DaxCLI is a robust CLI tool crafted to enhance and streamline your development process. Equipped with features such as session ID generation and analytics integration, it aims to be your go-to tool for project development. Here's how to get it up and running for local development.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#local-development-instructions-consensys-team-members)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)
6. [Contact](#contact)

## Prerequisites

Before you begin, ensure that you have the following software installed on your local machine:

- Node.js (version 14.x or later recommended)
- A package manager (pnpm or npm - we strongly suggest pnpm)
- Git

Please note that yarn has not been tested. If you do use yarn please open an issue and let us know if it does or does not work and what can be done to support it.

## Local Development Instructions (Consensys Team Members)

### Step 1: Clone the Repository

Be sure to check out the branch called [DEMO](https://github.com/Dax911/daxCLI/tree/DEMO) where the working demo version of this repo is stored. I apologize for the chaos in this code. The DEMO branch should always contain a working version for local development.

```bash
git clone -b DEMO https://github.com/Dax911/daxCLI.git
```

### Step 2: Install Dependencies

Navigate to the root directory of the CLI tool and install the necessary dependencies using pnpm (preferred) or npm:

```bash
cd path/to/daxCLI
pnpm install
# or
npm install
```

### Step 3: Build the Project

Once the dependencies are installed, build the project to compile the source files:

```bash
pnpm build
# or
npm run build
```

## Usage

### Step 4: Start the CLI

Initiate the CLI tool with the start command:

```bash
pnpm start
# or
npm start
```

### Step 5: Setup Your Project

Follow the CLI tool's instructions to set up your project. You'll be guided through a series of prompts to configure the necessary parameters for your project.

### Step 6: Navigate to Your New Project

After the setup is complete, navigate to the generated project directory:

```bash
cd path/to/generated/project
```

### Step 7: Setup the Frontend

Navigate to the generated frontend directory and install the necessary dependencies:

```bash
cd frontend
pnpm install
# or
npm install
```

### Step 8: Launch the Development Server

Start the development server to explore and edit your project:

```bash
pnpm dev
# or
npm run dev
```

Now, you can delve into the project, modify smart contracts, attempt a truffle deployment, or adjust your frontend as per your needs.

## Contributing

We welcome contributions from the community. Please refer to our [contributing guidelines](LINK-TO-CONTRIBUTING.md) for detailed information on how to participate in this project.

## License

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Contact

If you have any queries or need further assistance, feel free to contact us at [contact@consensys.com](mailto:contact@consensys.com).

License Apache 2.0
