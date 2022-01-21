# SwindleJS Contributing Guide
I am very grateful you are interested in contributing to SwindleJS. Before you submit your contribution, please take a
moment to review the following guidelines:

- [Module Guidelines](MODULE_GUIDELINES.md)
- [Coding Guidelines](CODING_STANDARDS.md)

## Issue Reporting
When reporting issues, please keep the following in mind:
TBW

## Pull Request Guidelines
- The `master` branch is just a snapshot of the current stable version of SwindleJS. All development should be done in dedicated branches. Please **DO NOT** submit Pull Requests
agains the `master` branch.

If you are contributing to an existing module:
- Please work in the `src` folder. **DO NOT** include the `dist` folder in your commits.
- Make sure all the tests pass before you submit your Pull Request.
- If you are adding a new utility to one of the modules, please include appropriate test cases, as well as a brief overview of why you believe that utility should be included in that moduel.

If you are creating a new module:
- Please place your module in the `packages` directory.
- Please follow the module guidelines.

## Development Setup
- NodeJS 14 or higher
- Yarn

## Module Structure
SwindleJS is composedd of several small modules located in the `packages` directory. Each module has a very similar structure.
- `srcs/` contains module source code.
- `tests/cases` contains module tests.
- `dist` contains built files for distribution. Note this directory is only updated when a release happens; they do not reflect the latest changes in development branches.
- `index.ts` is the root of the module. This file usually only contains exports for the module's API.

Modules also contain a few relevant configuration files, which can be found in the `templates/` directory.
