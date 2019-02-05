const { cdn } = require(`../config`);

function injectLocals(context, next) {
  Object.assign(context.state, { cdn });
  return next();
}

module.exports = injectLocals;
