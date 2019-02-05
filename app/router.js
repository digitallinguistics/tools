/**
 * URL routing
 */

// Imports
const Router = require(`koa-router`);

// Setup router and routing methods
const router = new Router();
const get    = router.get.bind(router);

// Routes
get(`/`, context => context.render(`home/home`));
get(`/home`, context => context.render(`home/home`));

module.exports = router.routes();
