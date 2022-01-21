# Module Guidelines
If you are creating a new module for SwindleJS, please be sure to follow these guidelines.

## When Should I Create a Module?
SwinldeJS is intended to be a standard library for NodeJS. As such, As such, when deciding whether or not to create a module it is recommended to consider the following:
- Is the functionality commonly used?
- Is the module functionality general purpose?

If both these considerations are met, your module may be a good candidate for SwindleJS.

Examples of good candidates for SwindleJS modules include date manipulation, Dependency Injection, and Color manipulation. Likewise, examples of poor candidates for Swindle Modules include third party library extensiions that only work with that library, some niche functionality that is very domain specific.

## Creating a Module
If you have concluded that the functionality you are hoping to build is a good candidate for a SwindleJS module, you can begin by following the guildelines below.

### Module Structure
All SwindleJS modules follow this structure.
- `srcs/` contains your module source code.
- `tests/cases` contains module tests.
- `dist` contains built files for distribution. Note this directory is only updated when a release happens; they do not reflect the latest changes in development branches.
- `index.ts` is the root of the module. This file usually only contains exports for the module's API.
- `.gitignore` is the standard Gitignore file, which you can find a template for [here](./../templates/GITIGNORE.txt).
- `jest.config.cjs` is the Jest configuration file. You can find a template for it [here](./../templates/jest-config-cjs.txt).
- `package.json` is pretty straightforward. You can find a template for it [here](./../templates/package-json.txt).
- `README.md` is your module's main documentation file. You can find a template for it [here](./../templates/readme-md.txt).
- `tsconfig.json` is the tsconfig file, since all SwindleJS modules are written in TypeScript. You can find a recommended template [here](./../templates/tsconfig-json.txt)
- `tslint.json` is the lint file. You can find a template for it [here](./../templates/tslint-json.txt).

### Module Dependencies
You can use whichever dependencies you need for your module. However, if an existing SwindleJS module can perform the task you need, it is highly recommended that you use that module over a third party module.

### Coding Standards
To keep things consistent across modules, we highly recommend you follow the SwindleJS [Coding Standards](./CODING_STANDARDS.md).
