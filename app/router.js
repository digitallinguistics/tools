/**
 * URL routing
 */

// Imports
const Router = require(`koa-router`);

// Setup router and routing methods
const router   = new Router();
const get      = router.get.bind(router);
const redirect = router.redirect.bind(router);

// Routes
get(`/`, context => context.render(`home/home`, { title: `Home` }));
redirect(`/home`, `/`);

module.exports = router;
