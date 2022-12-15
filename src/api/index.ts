import { Router } from 'express';
import auth from './routes/auth';
import user from './routes/user';
import family from './routes/family';

export default () => {
  const app = Router();
  auth(app);
  user(app);
  family(app);

  return app;
};
