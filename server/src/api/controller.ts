import { Request, Response } from 'express';
import { FORBIDDEN, OK } from 'constants/responseCodes';

const TWO_MIN_TIMEOUT = 120000;

export const authenticate = async (req: Request, res: Response) => {
  req.setTimeout(TWO_MIN_TIMEOUT);

  if (Object.keys(req.user).length === 1) {
    return res.sendStatus(FORBIDDEN);
  }
  return res.status(OK).send(req.user);
};
