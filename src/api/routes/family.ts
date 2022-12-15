import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { Logger } from 'winston';
import FamilyService from '@/services/family';
import ILooseObject from '@/interfaces/ILooseObject';
import R from '@/R';
import { celebrate, Joi } from 'celebrate';
import { IFamilyInputDTO } from '@/interfaces/IFamily';
import _ from 'lodash';

const route = Router();

export default (app: Router) => {
  app.use('/families', route);

  route.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const logger: Logger = Container.get('logger');
    try {
      const familyServiceInstance = Container.get(FamilyService);

      const filter = {} as ILooseObject;
      const data = await familyServiceInstance.GetFamilies(filter);
      next(new R({ data: data }));
    } catch (e) {
      logger.error('🔥 error: %o', e);
      next(e);
    }
  });

  route.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const logger: Logger = Container.get('logger');
    try {
      const familyServiceInstance = Container.get(FamilyService);
      const data = await familyServiceInstance.GetFamily(req.params.id);
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
        parent_id: Joi.number().allow(null),
        name: Joi.string().required(),
        sex: Joi.string().allow('male', 'female'),
      },
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      try {
        const familyServiceInstance = Container.get(FamilyService);
        const data = await familyServiceInstance.CreateFamily(req.body as IFamilyInputDTO);
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
        parent_id: Joi.number().allow(null),
        name: Joi.string().required(),
        sex: Joi.string().allow('male', 'female'),
      },
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      try {
        const familyServiceInstance = Container.get(FamilyService);
        const result = await familyServiceInstance.UpdateFamily(req.params.id, req.body as IFamilyInputDTO);
        if (_.every(result, Boolean)) {
          const family = await familyServiceInstance.GetFamily(req.params.id);
          return next(new R({ data: family }));
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
      const familyServiceInstance = Container.get(FamilyService);
      const result = await familyServiceInstance.DeleteFamily(req.params.id);
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
