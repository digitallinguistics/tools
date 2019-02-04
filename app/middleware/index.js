/**
 * Entry point for middleware
 */

const helmet = require(`./helmet`);
const serve  = require(`./static`);

module.exports = {
  helmet,
  serve,
};
