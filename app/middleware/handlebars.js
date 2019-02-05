/**
 * Configuration and initialization for server-side Handlebars
 */

// Imports
const handlebars = require(`handlebars`);
const path       = require(`path`);
const viewEngine = require(`koa-hbs`);

// Options for view engine
const options = {
  defaultLayout: false,
  extname:       `.hbs`,
  handlebars,
  partialsPath:  path.join(__dirname, `../../components`),
  viewPath:      path.join(__dirname, `../../views`),
};

module.exports = viewEngine.middleware(options);
