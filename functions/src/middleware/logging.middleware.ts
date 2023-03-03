import {NextFunction, Request, Response} from 'express';
import * as logger from '../util/custom.logger';

export const logging = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`http request details for ${req.method} -> ${req.url}`, {
    hostname: req.hostname,
    method: req.method,
    url: req.url,
  });
  logger.debug(`http request details for ${req.method} -> ${req.url}`, {
    hostname: req.hostname,
    method: req.method,
    url: req.url,
    body: req.body,
    headers: req.headers,
    params: req.params,
    query: req.query,
  });
  next();
};
