/**
 * Configuration and initialization for Helmet middleware
 */

const { production } = require(`../config`);
const helmet         = require(`koa-helmet`);

const config = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc:              [`'self'`, `*.digitallinguistics.io`],
      upgradeInsecureRequests: production,
    },
  },
};

module.exports = helmet(config);
