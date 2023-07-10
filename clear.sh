#!/bin/bash

# Wipe the current directory
rm -rf *

# Create directories
mkdir -p daxsoCLI/src/utils daxsoCLI/templates/apps/blockchain/{migrations,contracts} daxsoCLI/templates/apps/{admin-app,frontend-react,frontend-next,frontend-svelte,frontend-react-native} daxsoCLI/templates/packages/eslint-config-custom

# Create and populate files
echo '{
  "name": "daxsoCLI",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}' > daxsoCLI/package.json

echo 'module.exports = {}' > daxsoCLI/plopfile.ts

echo '{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true
  }
}' > daxsoCLI/tsconfig.json

# Set default contents for files
for directory in daxsoCLI/templates/apps/*/ ; do
  echo '{
    "name": "'${directory}'", 
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT"
  }' > $directory/package.json

  echo '{
    "compilerOptions": {
      "outDir": "./dist/",
      "noImplicitAny": true,
      "module": "es6",
      "target": "es5",
      "jsx": "react",
      "allowJs": true
    }
  }' > $directory/tsconfig.json
done

echo '{
  "workspaces": {
    "packages": [
      "daxsoCLI",
      "templates/apps/*"
    ]
  }
}' > daxsoCLI/turbo.json

# Create remaining empty files
touch daxsoCLI/README.md
touch daxsoCLI/src/store.ts
touch daxsoCLI/src/utils/renderTitle.ts
touch daxsoCLI/src/utils/logger.ts
touch daxsoCLI/templates/README.md
touch daxsoCLI/templates/pnpm-lock.yaml
touch daxsoCLI/templates/apps/blockchain/truffle-config.js
touch daxsoCLI/templates/apps/blockchain/migrations/1_initial_migration.js
touch daxsoCLI/templates/apps/blockchain/contracts/ERC20.sol
touch daxsoCLI/templates/apps/blockchain/contracts/ERC721.sol
touch daxsoCLI/templates/apps/blockchain/contracts/ERC777.sol
touch daxsoCLI/templates/apps/blockchain/contracts/ERC1155.sol
touch daxsoCLI/templates/apps/blockchain/contracts/ERC4626.sol

touch daxsoCLI/templates/packages/eslint-config-custom/index.js
touch daxsoCLI/.gitignore
touch daxsoCLI/.env
