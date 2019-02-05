# Contributing

Thank you for contributing to Tulip! Pull requests welcome!

* [Open an Issue][1]
* [Preparing a Pull Request][2]
* [General Guidelines for DLx Projects][8]

Consider [opening an issue][1] for any of the following:

- bugs
- feature requests
- requests for new tools

[Follow these steps when preparing a pull request.][2]

Be sure to read the [General Contributing Guidelines for DLx Projects][8].

## Coding Guidelines

This project includes an [ESLint][6] stylesheet for linting JavaScript, and a [Stylelint][11] stylesheet for linting CSS / LESS. These stylesheets help ensure consistency across developers when writing code. Please ensure that your code adheres to the included stylesheet as much as possible, and that exceptions are documented using `eslint-disable` or `stylelint-disable` as appropriate.

## Guidelines for Building Tools

Each of the tools in this project should aim to eventually implement all of the following:

- [ ] RTL and LTR text input
- [ ] local storage / IndexedDB storage (the tool should not be strongly integrated with the DLx database)
- [ ] import / export of data as DLx JSON files
- [ ] offline functionality
- [ ] a walkthrough using [Intro.js][7]
- [ ] support for custom keyboards (interfacing with data from the Typist tool)
- [ ] import / export to cloud services

## Releases, Versioning, & Branching

This project uses [semantic versioning][3] to track changes:

- **major:** when tools are added, removed, or rewritten or undergo drastic changes
- **minor:** when new features are added or removed from individual tools
- **patch:** when fixes are made or the documentation is changed

[GitHub releases][4] are used to publish releases. Only major and minor releases are published. Periodically, the `master` branch is tagged for a release, and any user-facing changes made since the last release are summarized. This automatically publishes the release to [Zenodo][5] for citation and archiving.

This project uses a simple branching structure. For each issue, an issue branch is made from `master`, and then merged back into `master` when the changes are complete.

## Project Structure

* `/.github` - GitHub documentation (for developers and contributors)
* `/app` - Server-side code (using [Koa][9])
  - `/config` - Environment variables (see the documentation for the environment variables in the [config][10] file)
  - `/middleware` - Koa middleware
* `/build` - Build scripts
* `/components` - Each folder contains all the source code for a single Handlebars component, including style and scripts
* `/public` - Static assets (CSS, JS, images, etc.) are served from this folder
* `/views` - Each folder contains all the source code for a single page or tool, including style and scripts

Each tool should have a folder structure like the one below.

`/{tool}`
  - `index.js` - This file should export the server-side GET handler
  - `{tool}.hbs` - The Handlebars template for this page / tool
  - `{tool}.js` - The entry point for the client-side JavaScript
  - `{tool}.less` - The entry point for the LESS files

[1]: https://github.com/digitallinguistics/tools/issues
[2]: https://github.com/digitallinguistics/tools/blob/master/.github/PULL_REQUEST_TEMPLATE.md
[3]: https://semver.org/
[4]: https://github.com/digitallinguistics/tools/releases
[5]: https://zenodo.org/
[6]: https://eslint.org/
[7]: https://introjs.com/
[8]: https://github.com/digitallinguistics/digitallinguistics.github.io/blob/master/.github/CONTRIBUTING.md
[9]: https://www.npmjs.com/package/koa
[10]: https://github.com/digitallinguistics/tools/blob/master/app/config/index.js
