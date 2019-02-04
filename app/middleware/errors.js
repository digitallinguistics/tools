/**
 * A generic error handler that returns a simple JSON response
 */

const { STATUS_CODES: statusCodes } = require(`http`);

const {
  logAppErrors,
  logUserErrors,
} = require(`../config`);

async function errors(context, next) {

  try {

    await next();

    const { status } = context;
    const statusCode = statusCodes[status];

    if (status === 404) {

      const message = `The page ${context.originalUrl} was not found.`;

      if (logUserErrors) console.warn(message);

      context.body = {
        message,
        status,
        statusCode,
      };

    }

  } catch (e) {

    const status     = e.statusCode || e.status || 500;
    const statusCode = e.statusCode || statusCodes[status];

    const message = `Internal server error. Please open an issue on GitHub at: https://github.com/digitallinguistics/digitallinguistics.io`;

    if ((400 <= status < 500) && logUserErrors) console.error(e);
    if ((500 <= status) && logAppErrors) console.error(e);

    context.body = {
      message,
      status,
      statusCode,
    };

  }

}

module.exports = errors;
