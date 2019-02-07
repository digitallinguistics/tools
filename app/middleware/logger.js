const { logRequests } = require(`../config`);

function logger(context, next) {

  const { method, originalUrl } = context;

  if (logRequests) {
    const timestamp = new Date().toISOString();
    console.info(`${timestamp}: ${method} ${originalUrl}`);
  }

  return next();

}

module.exports = logger;
