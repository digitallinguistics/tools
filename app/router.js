/**
 * URL routing
 */

// Imports
const Router = require(`koa-router`);
const routes = require(`../views`);

// Setup router and routing methods
const router   = new Router();
const get      = router.get.bind(router);
const redirect = router.redirect.bind(router);

// Routes
get(`/`, routes.home);
redirect(`/home`, `/`);

module.exports = router;
