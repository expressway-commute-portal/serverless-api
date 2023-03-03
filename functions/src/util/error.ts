import {Logger} from './custom.logger';
import {NextFunction, Request, Response} from 'express';

const logger = new Logger('Global Error Handler');

export const globalErrorHandler = (
  err: Exception,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  logger.error(err.message, err.data);
  res.status(err.statusCode).send({
    message: err.message,
    statusCode: err.statusCode,
    status: err.status,
    data: err.data,
  });
};

export class Exception extends Error {
  constructor(
    public message: string,
    public statusCode: number,
    public status: string,
    public data: any,
  ) {
    super(message);
  }
}

export class BadRequestException extends Exception {
  constructor(message: string, data: any) {
    super(message, 400, 'BadRequest', data);
  }
}

export class UnauthorizedException extends Exception {
  constructor(message: string, data: any) {
    super(message, 401, 'Unauthorized', data);
  }
}

export class ForbiddenException extends Exception {
  constructor(message: string, data: any) {
    super(message, 403, 'Forbidden', data);
  }
}

export class NotFoundException extends Exception {
  constructor(message: string, data?: any) {
    super(message, 404, 'NotFound', data);
  }
}

export class InternalServerErrorException extends Exception {
  constructor(message: string, data: any) {
    super(message, 500, 'InternalServerError', data);
  }
}
