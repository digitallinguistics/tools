/**
 * Configuration and initialization of koa-static middleware, for serving static assets
 */

const path  = require(`path`);
const serve = require(`koa-static`);

const root = path.join(__dirname, `../../public`);

module.exports = serve(root);
