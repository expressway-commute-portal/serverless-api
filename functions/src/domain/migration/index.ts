import express from 'express';
import cors from 'cors';
import {https} from 'firebase-functions';
import bodyParser from 'body-parser';
import {logging} from '../../middleware/logging.middleware';
import {globalErrorHandler} from '../../util/error';
import feedData from './feedData.endpoint';
import modifyPrices from './modifyPrices.endpoint';

const app = express();
app.use(cors({origin: true}));
app.use(bodyParser.json());
app.use(logging);

app.get('/', (req, res) => {
  res.send({});
});

app.post('/feed-data', feedData);
app.post('/modify-prices', modifyPrices);

app.use(globalErrorHandler);

const migrationAPI = https.onRequest(app);

export default migrationAPI;
