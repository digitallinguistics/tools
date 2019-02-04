/**
 * App setup and configuration
 */

// Imports
const Koa  = require(`koa`);
const meta = require(`../package.json`);

const env  = process.env.NODE_ENV || `localhost`;
const port = process.env.PORT || 3001; // eslint-disable-line no-magic-numbers

// Initialize Koa
const app = new Koa();

// Settings
app.proxy = true; // trust the Azure proxy

app.use(context => {
  context.body = `DLx Tools`; // eslint-disable-line no-param-reassign
});

app.listen(port, () => console.info(`Server started. Press Ctrl+C to terminate.
  Project: ${meta.name}
  Port:    ${port}
  Time:    ${new Date}
  Node:    ${process.version}
  Env:     ${env}`));
