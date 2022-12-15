import express from 'express';
import cors from 'cors';
import routes from '@/api';
import config from '@/config';
import ILooseObject from '@/interfaces/ILooseObject';
import { isCelebrateError } from 'celebrate';
export default ({ app }: { app: express.Application }) => {
  /**
   * Health Check endpoints
   */
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy');

  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Some sauce that always add since 2014
  // "Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it."
  // Maybe not needed anymore ?
  app.use(require('method-override')());

  // Transforms the raw string of req.body into json
  app.use(express.json());
  // Load API routes
  app.use(config.api.prefix, routes());

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
  });

  /// error handlers
  app.use((err, req, res, next) => {
    console.log('error handler');
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({ message: err.message }).end();
    }
    if (err.name === 'NotFoundError') {
      return res.status(err.status).send({ message: err.message, data: null }).end();
    }
    if (err.name === 'ValidationError') {
      const errors: ILooseObject = {};
      for (const p in err.errors) {
        errors[p] = err.errors[p]['message'];
      }
      return res.status(400).send({ errors: errors }).end();
    }
    if (isCelebrateError(err)) {
      const errors: { [k: string]: any } = {};
      const errorBody = err.details.get('body')?.details;
      for (const p in errorBody) {
        errors[errorBody[p]['path'].join('.')] = errorBody[p]['message'];
      }
      const errorQuery = err.details.get('query')?.details;
      for (const p in errorQuery) {
        errors[errorQuery[p]['path'].join('.')] = errorQuery[p]['message'];
      }
      const errorParam = err.details.get('params')?.details;
      for (const p in errorParam) {
        errors[errorParam[p]['path'].join('.')] = errorParam[p]['message'];
      }
      return res.status(400).send({ errors: errors }).end();
    }
    return next(err);
  });

  // final handler
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
