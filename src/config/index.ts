import dotenv from 'dotenv';
import database from 'database.config.json';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: parseInt(process.env.PORT, 10),

  // Database
  databaseHost: database[process.env.NODE_ENV]['host'] || '127.0.0.1',
  databasePort: database[process.env.NODE_ENV]['port'] || 3306,
  databaseUser: database[process.env.NODE_ENV]['username'] || 'root',
  databasePassword: database[process.env.NODE_ENV]['password'] || '',
  databaseName: database[process.env.NODE_ENV]['database'],

  // JWT
  jwtSecret: process.env.JWT_SECRET,
  jwtAlgorithm: process.env.JWT_ALGO,

  // Logger
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  // Route
  api: {
    prefix: '/api',
  },
};
