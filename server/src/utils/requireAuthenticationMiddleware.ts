import { NextFunction, Request, Response } from 'express';
import { UNAUTHORIZED } from 'constants/responseCodes';
import { vessel } from './vessel';

// Checks if any Vessel cookies exist. If none exist, the user doesn't have Vessel installed.
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
    };
    if ('name' in user.attestations) {
      req.user.name = user.attestations.name;
    }
    if ('email' in user.attestations) {
      req.user.email = user.attestations.email;
    }
    if ('sms' in user.attestations) {
      req.user.phoneNumber = user.attestations.sms;
    }
    return next();
  } catch (error) {
    return res.sendStatus(UNAUTHORIZED);
  }
};
