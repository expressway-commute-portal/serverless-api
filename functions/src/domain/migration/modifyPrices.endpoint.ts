import {Request, Response} from 'express';
import * as migrationService from '../../service/migration.service';
import {Logger} from '../../util/custom.logger';

const logger = new Logger('Modify Prices Endpoint');

const modifyPrices = async (req: Request, res: Response): Promise<any> => {
  try {
    await migrationService.modifyPrices();
    return res.send({
      message: 'Modify Prices successfully',
      status: 'OK',
      statusCode: 200,
    });
  } catch (e) {
    logger.error(e.message, e);
    return res.status(500).send({
      message: 'Internal Server Error',
      status: 'InternalServerError',
      statusCode: 500,
    });
  }
};

export default modifyPrices;
