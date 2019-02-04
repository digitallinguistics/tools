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

The project includes an [ESLint][6] stylesheet to ensure consistency when writing JavaScript. Please ensure that your code adheres to the included stylesheet as much as possible, and that exceptions are documented using `eslint-ignore`.

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
- **patch:** when fixes or changes to documentation are made

[GitHub releases][4] are used to publish releases. Only major and minor releases are published. Periodically, the `master` branch is tagged for a release, and any changes made since the last release are summarized. This automatically publishes the release to [Zenodo][5] for citation and archiving.

This project uses a simple branching structure. For each issue, an issue branch is made from `master`, and then merged back into `master` when the changes are complete.

[1]: https://github.com/digitallinguistics/tools/issues
[2]: https://github.com/digitallinguistics/tools/blob/master/.github/PULL_REQUEST_TEMPLATE.md
[3]: https://semver.org/
[4]: https://github.com/digitallinguistics/tools/releases
[5]: https://zenodo.org/
[6]: https://eslint.org/
[7]: https://introjs.com/
[8]: https://github.com/digitallinguistics/digitallinguistics.github.io/blob/master/.github/CONTRIBUTING.md
