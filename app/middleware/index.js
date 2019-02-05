/**
 * Entry point for middleware
 */

const errors = require(`./errors`);
const helmet = require(`./helmet`);
const logger = require(`./logger`);
const serve  = require(`./static`);
const vary   = require(`./vary`);

module.exports = {
  errors,
  helmet,
  logger,
  serve,
  vary,
};
