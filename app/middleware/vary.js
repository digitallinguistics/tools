/**
 * Sets the Vary header for all incoming requests
 */

function vary(context, next) {
  context.vary(`Upgrade-Insecure-Requests`);
  return next();
}

module.exports = vary;
