import { Router } from 'express';
import index from './routes/index';
import family from './routes/family';
import asset from './routes/asset';

export default () => {
  const app = Router();
  index(app);
  family(app);
  asset(app);

  return app;
};
