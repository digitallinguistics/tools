/**
 * App setup and configuration
 */

// Imports
const Koa    = require(`koa`);
const meta   = require(`../package.json`);
const router = require(`./router`);

const { env, port } = require(`./config`);

const {
  errors,
  handlebars,
  helmet,
  locals,
  logger,
  serve,
  vary,
} = require(`./middleware`);

// Initialize Koa
const app = new Koa();

// Settings
app.proxy = true; // trust the Azure proxy

// Middleware
app.use(errors);                  // error handling and logging
app.use(serve);                   // serve static files from /public
app.use(logger);                  // log requests to the console
app.use(helmet);                  // set security settings
app.use(vary);                    // set the Vary header
app.use(locals);                  // inject local variables
app.use(handlebars);              // use Handlebars for templating
app.use(router.routes());         // add routes
app.use(router.allowedMethods()); // return 405 and 501

// Start server
app.listen(port, () => console.info(`Server started. Press Ctrl+C to terminate.
  Project: ${meta.name}
  Port:    ${port}
  Time:    ${new Date}
  Node:    ${process.version}
  Env:     ${env}`));
