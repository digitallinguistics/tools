/**
 * Load environment-specific config settings
 */

process.env.NODE_ENV = process.env.NODE_ENV || `localhost`;

const settings = require(`./${process.env.NODE_ENV}`);

Object.assign(process.env, settings);

module.exports = {
  env:        process.env.NODE_ENV,
  localhost:  process.env.NODE_ENV === `localhost`,
  port:       process.env.PORT,
  production: process.env.NODE_ENV === `production`,
};
