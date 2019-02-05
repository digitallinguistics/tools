/**
 * Builds all the CSS files for the project
 */

// IMPORTS
const CleanCSSPlugin = require(`less-plugin-clean-css`);
const createSpinner  = require(`ora`);
const less           = require(`less`);
const path           = require(`path`);
const { promisify }  = require(`util`);
const recurse        = require(`recursive-readdir`);
const rimraf         = require(`rimraf`);

const {
  readFile,
  mkdir,
  writeFile,
} = require(`fs`).promises;

// VARIABLES
const cleanCSSPlugin = new CleanCSSPlugin({ keepSpecialComments: 0 });
const cssDir         = path.join(__dirname, `../public/css`);
const viewsDir       = path.join(__dirname, `../views`);
const removeDir      = promisify(rimraf);

// METHODS

/**
 * Builds all the CSS files for the project
 * @return {Promise}
 */
async function buildCSS() {

  const spinner = createSpinner(`Building CSS files`);

  spinner.start();

  try {

    await removeDir(cssDir);
    await mkdir(cssDir);
    const lessFiles = await recurse(viewsDir, [ignore]);
    await Promise.all(lessFiles.map(buildFile));

  } catch (e) {

    return spinner.fail(e);

  }

  spinner.succeed(`CSS files built`);

}

/**
 * Compiles an individual LESS file to the /css directory
 * @return {Promise}
 */
async function buildFile(filePath) {
  const lessInput      = await readFile(filePath, `utf8`);
  const { css }        = await less.render(lessInput, { plugins: [cleanCSSPlugin] });
  const inputFilename  = path.basename(filePath);
  const outputFilename = inputFilename.replace(`.less`, `.css`);
  const outputPath     = path.join(cssDir, outputFilename);
  await writeFile(outputPath, css, `utf8`);
}

/**
 * An ignore function used by recursive-readdir to ignore non-LESS files
 */
function ignore(filePath, stats) {
  if (stats.isFile() && path.extname(filePath) !== `.less`) return true;
  return false;
}

module.exports = buildCSS;
