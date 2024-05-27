# Contributor Guidelines

🌟 **Thank you** 🌟 for contributing to the TooLiP app!

- Have a question? [Check out the discussions.][discussions]
- Want to request a new tool? [Open an issue here.][tool]
- Want to request a feature or enhancement to an existing tool? [Open an issue here.][feature]
- Need to report a problem? [Open an issue here.][bug]

## Overview

TooLiP is an online suite of tools that helps language researchers work with their data.

## General Guidelines

- Each tool is a standalone page within the website focused on helping linguists perform a single task. More complex tools should be integrated into the data management app ([Lotus]) or the data explorer portal ([Oxalis]).
- Tools should use formats and libraries from the Digital Linguistics (DLx) project.
- The site is designed to work offline. Tools should function without need for a server connection or calls to an external API (though this can happen optionally).

## Getting Started

1. Install the latest LTS version of [Node].
2. Clone this repository and navigate into its folder.

    ```cmd
    > git clone https://github.com/digitallinguistics/tools.git
    > cd tools
    ```

    If you're unfamiliar with the command line, consider installing [GitHub Desktop][gh-desktop] instead in order to sync your code with GitHub.

3. Install the software dependencies for the project.

    ```cmd
    > npm install
    ```

4. Start a local server.

    ```cmd
    > npm start
    ```

5. Make your changes, then rebuild the app.

    ```cmd
    > npm run build
    ```

6. You can also use [nodemon] to automatically rebuild and restart the server when changes are made. A nodemon configuration file is included in the repo. To use it, simply run `nodemon` from the command line in the project root.

7. End-to-end tests are run using [Cypress]. You can run them programmatically by running `npm test` on the command line in the project root, or you can first start the server, and then (in a new command terminal) open the Cypress interface to run them manually using `npm run open-cypress`.

## Resources

- **[Feather Icons][Feather]:** DLx projects use Feather Icons for UI by default.

## Dependencies

- **[11ty]:** The static site generator used to build the site. Mostly useful for its layout functionality.
- **[Cypress]:** For E2E testing.
- **[esbuild]:** For bundling JS and CSS.
- **[ESLint]:** For linting JavaScript. Uses an opinionated set of style rules.
- **[flexbox-reset]:** A CSS reset that uses flexbox by default for many elements that are typically rendered as block elements.
- **[Stylelint]:** For linting CSS. Uses an opinionated set of style rules.
- **[svgstore]:** Creates SVG sprites.

**NOTE:** This project does not use either a JavaScript transpiler or a CSS preprocessor. You should only use features that are supported by the current versions of the major evergreen browsers (Chrome, Edge, Firefox, Safari).

## DLx Dependencies

- **[design]:** Design components shared across DLx projects.
- **[eslint-config]:** An opinionated JS code style set shared across DLx projects.
- **[stylelint-config]** An opinionated CSS code style set shared across DLx projects.
- **[styles]:** CSS styles for presenting linguistic data and documents on the web.

Individual tools also use various DLx dependencies. You explore all the DLx projects [here][DLx].

## Versioning & Releases

Only update the version number when you're ready to make a release.

Development branches can be forked directly from `main`. For now there are no version branches, though there may be in the future.

Increment version numbers based on the following events.

- **major:**
  - site overhaul
  - major overhaul to a tool
  - new tool added
  - tool removed
- **minor:**
  - new functionality added
  - changes to an existing tool
- **patch:**
  - bug fixes
  - changes to development environment
  - changes to documentation

<!-- LINKS -->
[11ty]:             https://www.11ty.dev/
[bug]:              https://github.com/digitallinguistics/tools/issues/new?assignees=&labels=%F0%9F%90%9E+bug&projects=&template=bug.md&title=%5BBUG%5D
[Cypress]:          https://www.cypress.io/
[design]:           https://github.com/digitallinguistics/design
[discussions]:      https://github.com/orgs/digitallinguistics/discussions?discussions_q=is%3Aopen+label%3A%22%F0%9F%9B%A0%EF%B8%8F+Tools%22
[DLx]:              https://github.com/digitallinguistics
[esbuild]:          https://esbuild.github.io/
[ESLint]:           https://eslint.org/
[eslint-config]:    https://github.com/digitallinguistics/eslint-config
[Feather]:          https://feathericons.com/
[feature]:          https://github.com/digitallinguistics/tools/issues/new?assignees=&labels=%F0%9F%86%95+enhancement&projects=&template=feature.md&title=%5BFEATURE%5D
[flexbox-reset]:    https://github.com/dwhieb/flexbox-reset
[gh-desktop]:       https://desktop.github.com/
[Lotus]:            https://github.comdigitallinguistics/app
[Node]:             https://nodejs.org/en
[nodemon]:          https://nodemon.io/
[Oxalis]:           https://github.comdigitallinguistics/data-explorer
[styles]:           https://github.com/digitallinguistics/styles
[Stylelint]:        https://stylelint.io/
[stylelint-config]: https://github.com/digitallinguistics/stylelint-config
[svgstore]:         https://github.com/svgstore/svgstore
[tool]:             https://github.com/digitallinguistics/tools/issues/new?assignees=&labels=%F0%9F%9B%A0%EF%B8%8F+tool&projects=&template=tool.md&title=%5BTOOL%5D
