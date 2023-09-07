---
title: Getting Started
description: Getting Started with the DaxSo toolkit
layout: ../../layouts/docs.astro
lang: en
---

The Developer Acceleration eXperience for Smart Contract Organizations or DAXSO is an exensible build system that works across all major platforms.

## Prerequisites

Before you begin, ensure that you have the following software installed on your local machine:

- Node.js (version 14.x or later recommended)
- A package manager (pnpm or npm - we strongly suggest pnpm)
- Git

Please note that yarn has not been tested. If you do use yarn please open an issue and let us know if it does or does not work and what can be done to support it.

## Local Development Instructions

### Step 1: Clone the Repository

Clone the repository from the github [repo](https://github.com/Dax911/daxsoCLI.git)

```bash
git clone https://github.com/Dax911/daxsoCLI.git
```

### Step 2: Install Dependencies

Navigate to the root directory of the CLI tool and install the necessary dependencies using pnpm (preferred) or npm:

```bash
cd path/to/daxsoCLI
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
