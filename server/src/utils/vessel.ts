import { NextFunction, Request, Response } from 'express';
import { Vessel } from 'vessel-node';

export const vessel = new Vessel();
vessel.addPermittedScope('localhost');

export const addVesselHeadersMiddleware = (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  res.setHeader('x-vessel-support', 'true');
  res.setHeader('x-vessel-attestations', 'true');
  next();
};
