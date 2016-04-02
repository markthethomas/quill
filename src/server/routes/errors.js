import PrettyError from 'pretty-error';

export default function handleErrors(err, req, res) {
  if (err.name === 'UnauthorizedError') {
    res.status(401)
      .send('Unauthorized');
  }
  if (process.env.NODE_ENV === 'development') {
    // dev error handler (more verbose)
    console.error(err);
    console.error(err.stack);
    const errorRenderer = new PrettyError();
    res.status(err.status || 500)
      .send(errorRenderer.render(err));
  }

  // production error handler (no stacktraces leaked to user)
  if (process.env.NODE_ENV === 'production') {
    console.error(err);
    res.status(500)
      .send('Internal Server Error ¯\\_(ツ)_/¯');
  }
}
