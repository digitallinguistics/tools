/**
 * A generic error handler that renders the error page
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

      const message = `The page <code class=code>${context.originalUrl}</code> was not found.`;

      if (logUserErrors) console.warn(message);

      return context.render(`error/error`, {
        message,
        status,
        statusCode,
        title: `Error`,
      });

    }

  } catch (e) {

    const status     = e.statusCode || e.status || 500;
    const statusCode = e.statusCode || statusCodes[status];

    const message = `Internal server error. <a href=https://github.com/digitallinguistics/tools/issues>Please open an issue on GitHub.</a>`;

    if ((400 <= status < 500) && logUserErrors) console.error(e);
    if ((500 <= status) && logAppErrors) console.error(e);

    return context.render(`error/error`, {
      message,
      status,
      statusCode,
      title: `Error`,
    });

  }

}

module.exports = errors;
