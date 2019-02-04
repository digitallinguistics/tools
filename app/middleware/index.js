/**
 * Entry point for middleware
 */

const helmet = require(`./helmet`);
const logger = require(`./logger`);
const serve  = require(`./static`);

module.exports = {
  helmet,
  logger,
  serve,
};
