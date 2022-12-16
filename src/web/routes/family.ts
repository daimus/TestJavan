import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import FamilyService from '@/services/family';
const route = Router();

export default (app: Router) => {
  app.use('/families', route);

  route.get('/', (req: Request, res: Response) => {
    return res.render('family/index');
  });

  route.get('/create', async (req: Request, res: Response) => {
    const familyServiceInstance = Container.get(FamilyService);
    const parents = await familyServiceInstance.GetFamilies();
    return res.render('family/create', { parents });
  });

  route.get('/:id/edit', async (req: Request, res: Response) => {
    const familyServiceInstance = Container.get(FamilyService);
    const family = await familyServiceInstance.GetFamily(req.params.id);
    const parents = await familyServiceInstance.GetFamilies();
    return res.render('family/edit', { family, parents });
  });

  route.get('/:id/assets', async (req: Request, res: Response) => {
    const familyServiceInstance = Container.get(FamilyService);
    const family = await familyServiceInstance.GetFamily(req.params.id);
    return res.render('family/assets', { family });
  });
};
