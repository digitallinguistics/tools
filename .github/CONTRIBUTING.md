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

This project does not use releases or versioning. It uses a simple branching workflow, where each issue is associated with a single issue branch. That issue branch is squashed and merged back into the `master` branch when the changes are complete.

[1]: https://github.com/digitallinguistics/tools/issues
[2]: https://github.com/digitallinguistics/tools/blob/master/.github/PULL_REQUEST_TEMPLATE.md

[7]: https://introjs.com/
[8]: https://github.com/digitallinguistics/digitallinguistics.github.io/blob/master/.github/CONTRIBUTING.md
