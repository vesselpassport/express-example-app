import express, { Express } from 'express';
import { requireAuthenticationMiddleware } from 'utils/requireAuthenticationMiddleware';
import * as controller from './controller';

const router = express.Router();

router.post(
  '/authenticate',
  requireAuthenticationMiddleware,
  controller.authenticate
);

export const initApi = (server: Express): void => {
  server.use('/api/', router);
};
