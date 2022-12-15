import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import Logger from './logger';
import './events';

export default async ({ expressApp }) => {
  const userModel = {
    name: 'userModel',
    model: require('../models/user').default,
  };
  const familyModel = {
    name: 'familyModel',
    model: require('../models/family').default,
  };

  dependencyInjectorLoader({
    models: [userModel, familyModel],
  });
  Logger.info('✌️ Dependency Injector loaded');

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
