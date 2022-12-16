import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { Logger } from 'winston';
import AssetService from '@/services/asset';
import ILooseObject from '@/interfaces/ILooseObject';
import R from '@/R';
import { celebrate, Joi } from 'celebrate';
import _ from 'lodash';
import { IAssetInputDTO } from '@/interfaces/IAsset';

const route = Router();

export default (app: Router) => {
  app.use('/assets', route);

  route.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const logger: Logger = Container.get('logger');
    try {
      const assetServiceInstance = Container.get(AssetService);
      const filter = {} as ILooseObject;
      if (req.query?.family_id) {
        filter.family_id = req.query.family_id;
      }
      const data = await assetServiceInstance.GetAssets(filter);
      next(new R({ data: data }));
    } catch (e) {
      logger.error('🔥 error: %o', e);
      next(e);
    }
  });

  route.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const logger: Logger = Container.get('logger');
    try {
      const assetServiceInstance = Container.get(AssetService);
      const data = await assetServiceInstance.GetAsset(req.params.id);
      next(new R({ data: data }));
    } catch (e) {
      logger.error('🔥 error: %o', e);
      next(e);
    }
  });

  route.post(
    '/',
    celebrate({
      body: {
        family_id: Joi.number().required(),
        name: Joi.string().required(),
      },
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      try {
        const assetServiceInstance = Container.get(AssetService);
        const data = await assetServiceInstance.CreateAsset(req.body as IAssetInputDTO);
        next(new R({ data: data }));
      } catch (e) {
        logger.error('🔥 error: %o', e);
        next(e);
      }
    },
  );

  route.patch(
    '/:id',
    celebrate({
      body: {
        family_id: Joi.number().required(),
        name: Joi.string().required(),
      },
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      try {
        const assetServiceInstance = Container.get(AssetService);
        const result = await assetServiceInstance.UpdateAsset(req.params.id, req.body as IAssetInputDTO);
        if (result) {
          const asset = await assetServiceInstance.GetAsset(req.params.id);
          return next(new R({ data: asset }));
        }
        throw new Error('Unable to update family');
      } catch (e) {
        logger.error('🔥 error: %o', e);
        next(e);
      }
    },
  );

  route.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const logger: Logger = Container.get('logger');
    try {
      const assetServiceInstance = Container.get(AssetService);
      const result = await assetServiceInstance.DeleteAsset(req.params.id);
      if (result) {
        return next(new R({ httpCode: 204 }));
      }
      throw new Error('Unable to delete family');
    } catch (e) {
      logger.error('🔥 error: %o', e);
      next(e);
    }
  });
};
