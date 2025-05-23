# @pauvelasco77/my-tools

Development tools with commitlint configuration. This package automatically sets up commitlint configuration for your project.

## Features

- Automatically installs and configures commitlint
- Sets up commit message standards based on conventional commits
- Simple, zero-configuration setup

## Installation

Since this package is published to GitHub Packages, you'll need to authenticate with GitHub to install it.

### Setup Authentication

Create or edit your `.npmrc` file in your home directory:

```bash
echo "@pauvelasco77:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN" >> ~/.npmrc
```

Replace `YOUR_GITHUB_TOKEN` with a GitHub Personal Access Token that has `read:packages` permissions.

### Install the Package

```bash
npm install @pauvelasco77/my-tools --save-dev
```

## What Happens During Installation

When you install this package:

1. It automatically copies a `.commitlintrc.json` file to the root of your project
2. This configures commitlint to use conventional commit standards
3. A `my-tools-setup.log` file is created as evidence of successful setup

## Manual Setup

If the automatic setup doesn't work, you can manually copy the `.commitlintrc.json` file from the node_modules:

```bash
cp node_modules/@pauvelasco77/my-tools/.commitlintrc.json .
```

## Usage with Husky

For the best experience, use this package with Husky:

```bash
npm install husky --save-dev
npx husky init
```

Then create a commit-msg hook:

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

## License

ISC
