/**
 * Entry point for middleware
 */

const errors = require(`./errors`);
const helmet = require(`./helmet`);
const logger = require(`./logger`);
const serve  = require(`./static`);

module.exports = {
  errors,
  helmet,
  logger,
  serve,
};
