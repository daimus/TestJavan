import { Sequelize } from 'sequelize';
import config from '@/config';
import { parseInt } from 'lodash';

const sequelize = new Sequelize(config.databaseName, config.databaseUser, config.databasePassword, {
  dialect: 'mysql',
  host: config.databaseHost,
  port: parseInt(config.databasePort),
  logging: false,
});

export default sequelize;
