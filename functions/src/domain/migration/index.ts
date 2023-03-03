import express from 'express';
import cors from 'cors';
import {https} from 'firebase-functions';
import bodyParser from 'body-parser';
import {logging} from '../../middleware/logging.middleware';
import {globalErrorHandler} from '../../util/error';
import feedData from './feedData.endpoint';

const app = express();
app.use(cors({origin: true}));
app.use(bodyParser.json());
app.use(logging);

app.get('/', (req, res) => {
  res.send({});
});

app.post('/up', feedData);

app.use(globalErrorHandler);

const migrationAPI = https.onRequest(app);

export default migrationAPI;
