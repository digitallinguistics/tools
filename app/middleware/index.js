/**
 * Entry point for middleware
 */

const errors     = require(`./errors`);
const handlebars = require(`./handlebars`);
const helmet     = require(`./helmet`);
const locals     = require(`./locals`);
const logger     = require(`./logger`);
const serve      = require(`./static`);
const vary       = require(`./vary`);

module.exports = {
  errors,
  handlebars,
  helmet,
  locals,
  logger,
  serve,
  vary,
};
