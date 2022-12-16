import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import AssetService from '@/services/asset';
const route = Router();

export default (app: Router) => {
  app.use('/assets', route);

  route.get('/create', async (req: Request, res: Response) => {
    const familyId = req.query.family_id;
    return res.render('asset/create', { familyId });
  });

  route.get('/:id/edit', async (req: Request, res: Response) => {
    const assetServiceInstance = Container.get(AssetService);
    const asset = await assetServiceInstance.GetAsset(req.params.id);
    return res.render('asset/edit', { asset });
  });
};
