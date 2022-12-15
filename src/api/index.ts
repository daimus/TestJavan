import { Router } from 'express';
import auth from './routes/auth';
import user from './routes/user';
import family from './routes/family';
import asset from './routes/asset';

export default () => {
  const app = Router();
  auth(app);
  user(app);
  family(app);
  asset(app);

  return app;
};
