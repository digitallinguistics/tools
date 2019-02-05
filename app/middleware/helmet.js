/**
 * Configuration and initialization for Helmet middleware
 */

const { production } = require(`../config`);
const helmet         = require(`koa-helmet`);

const config = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: [
        `'self'`,
        `*.digitallinguistics.io`,
        `digitallinguistics.blob.core.windows.net`,
      ],
      upgradeInsecureRequests: production,
    },
  },
};

module.exports = helmet(config);
