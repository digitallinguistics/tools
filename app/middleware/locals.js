/**
 * Injects local variables into the context object for use in Handlebars templates
 */

const { cdn }           = require(`../config`);
const { createSprites } = require(`../lib`);

async function injectLocals(context, next) {
  const svg = await createSprites();
  Object.assign(context.state, { cdn, svg });
  return next();
}

module.exports = injectLocals;
