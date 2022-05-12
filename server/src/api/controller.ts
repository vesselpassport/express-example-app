import { Request, Response } from 'express';
import { FORBIDDEN, OK } from 'constants/responseCodes';

const TWO_MIN_TIMEOUT = 120000;

export const authenticate = async (req: Request, res: Response) => {
  req.setTimeout(TWO_MIN_TIMEOUT);

  // If User ID is the only field in the user object, reject as that indicates
  // the user hasn't shared attestations yet
  if (Object.keys(req.user).length === 1) {
    return res.sendStatus(FORBIDDEN);
  }
  return res.status(OK).send(req.user);
};
