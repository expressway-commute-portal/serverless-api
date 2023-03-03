import {logger} from 'firebase-functions';

export class Logger {
  constructor(private readonly name: string) {}

  info(message: string, payload: any = {}) {
    let modifiedMessage = `${this.name} - ${message}`;
    if (typeof payload === 'string') {
      modifiedMessage = `${modifiedMessage} : ${payload}`;
    }
    logger.info(modifiedMessage, {payload, name: this.name});
  }

  debug(message: string, payload: any = {}) {
    let modifiedMessage = `${this.name} - ${message}`;
    if (typeof payload === 'string') {
      modifiedMessage = `${modifiedMessage} : ${payload}`;
    }
    logger.debug(modifiedMessage, {payload, name: this.name});
  }

  error(message: string, payload: any = {}) {
    let modifiedMessage = `${this.name} - ${message}`;
    if (typeof payload === 'string') {
      modifiedMessage = `${modifiedMessage} : ${payload}`;
    }
    logger.error(modifiedMessage, {payload, name: this.name});
  }

  warn(message: string, payload: any = {}) {
    let modifiedMessage = `${this.name} - ${message}`;
    if (typeof payload === 'string') {
      modifiedMessage = `${modifiedMessage} : ${payload}`;
    }
    logger.warn(modifiedMessage, {payload, name: this.name});
  }
}

export const info = (message: string, payload: any = {}): void => {
  logger.info(message, {payload});
};

export const debug = (message: string, payload: any = {}): void => {
  logger.debug(message, {payload});
};

export const error = (message: string, payload: any = {}): void => {
  logger.error(message, {payload});
};

export const warn = (message: string, payload: any = {}): void => {
  logger.warn(message, {payload});
};
