#!/bin/bash

# Wipe the current directory
rm -rf *

# Create directories
mkdir -p daxsoCLI/src/utils daxsoCLI/templates/apps/blockchain/{migrations,contracts} daxsoCLI/templates/apps/{admin-app,frontend-react,frontend-next,frontend-svelte,frontend-react-native} daxsoCLI/templates/packages/eslint-config-custom

# Create files
touch daxsoCLI/README.md
touch daxsoCLI/package.json
touch daxsoCLI/plopfile.ts
touch daxsoCLI/src/store.ts
touch daxsoCLI/src/utils/renderTitle.ts
touch daxsoCLI/src/utils/logger.ts
touch daxsoCLI/templates/README.md
touch daxsoCLI/templates/package.json
touch daxsoCLI/templates/turbo.json
touch daxsoCLI/templates/pnpm-lock.yaml
touch daxsoCLI/templates/apps/blockchain/package.json
touch daxsoCLI/templates/apps/blockchain/truffle-config.js
touch daxsoCLI/templates/apps/blockchain/migrations/1_initial_migration.js
touch daxsoCLI/templates/apps/blockchain/contracts/ERC20.sol
touch daxsoCLI/templates/apps/blockchain/contracts/ERC721.sol
touch daxsoCLI/templates/apps/blockchain/contracts/ERC777.sol
touch daxsoCLI/templates/apps/blockchain/contracts/ERC1155.sol
touch daxsoCLI/templates/apps/blockchain/contracts/ERC4626.sol

declare -a arr=("admin-app" "frontend-react" "frontend-next" "frontend-svelte" "frontend-react-native")

for i in "${arr[@]}"
do
   touch daxsoCLI/templates/apps/$i/package.json
   touch daxsoCLI/templates/apps/$i/tsconfig.json
done

touch daxsoCLI/templates/packages/eslint-config-custom/package.json
touch daxsoCLI/templates/packages/eslint-config-custom/index.js
touch daxsoCLI/.gitignore
touch daxsoCLI/.env
