/**
 * Load environment-specific config settings
 */

process.env.NODE_ENV = process.env.NODE_ENV || `localhost`;

const settings = require(`./${process.env.NODE_ENV}`);

Object.assign(process.env, settings);

/**
 * A hash of environment variables for the app
 * @type {Object}
 * @prop {String}  env           - The current environment. `localhost` || `production`
 * @prop {Boolean} localhost     - Whether the app is running on localhost
 * @prop {Boolean} logAppErrors  - Whether the app should log 5xx errors to the console
 * @prop {Boolean} logRequests   - Whether to log details about incoming requests
 * @prop {Boolean} logUserErrors - Whether the app should log 4xx errors to the console
 * @prop {Integer} port          - The port that the app is running on
 * @prop {Boolean} production    - Whether the app is running on production (including the `staging` slot)
 */
module.exports = {
  env:         process.env.NODE_ENV,
  localhost:   process.env.NODE_ENV === `localhost`,
  logRequests: process.env.LOQ_REQUESTS === `true` || process.env.LOG_REQUESTS === true,
  port:        process.env.PORT,
  production:  process.env.NODE_ENV === `production`,
};
