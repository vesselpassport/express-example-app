import { NextFunction, Request, Response } from 'express';
import { UNAUTHORIZED } from 'constants/responseCodes';
import { vessel } from './vessel';

export const requireAuthenticationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = vessel.getWeb3UserContext(req.cookies);
    if (!user) {
      throw new Error();
    }
    req.user = {
      id: user.userId,
      email: user.attestations.email,
      phoneNumber: user.attestations.sms,
      name: user.attestations.name,
    };
    return next();
  } catch (error) {
    return res.sendStatus(UNAUTHORIZED);
  }
};
