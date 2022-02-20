function errorMiddleware(err, req, res, next) {
  if (req.headersSent) {
    // When you add a custom error handler,
    // you must delegate to the default Express error handler,
    // when the headers have already been sent to the client:
    return next(err);
  }

  res.status(500).send({
    message: 'Something went wrong',
  });
}

module.exports = { errorMiddleware: errorMiddleware };