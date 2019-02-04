/**
 * App setup and configuration
 */

// Imports
const { helmet } = require(`./middleware`);
const Koa        = require(`koa`);
const meta       = require(`../package.json`);

const { env, port } = require(`./config`);

// Initialize Koa
const app = new Koa();

// Settings
app.proxy = true; // trust the Azure proxy

// Middleware
app.use(helmet);  // set security settings

app.use(context => {
  context.body = `DLx Tools`; // eslint-disable-line no-param-reassign
});

// Start server
app.listen(port, () => console.info(`Server started. Press Ctrl+C to terminate.
  Project: ${meta.name}
  Port:    ${port}
  Time:    ${new Date}
  Node:    ${process.version}
  Env:     ${env}`));
