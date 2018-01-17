import bodyParser from 'body-parser';
import express from 'express';
import router from './router';
import apis from './api';

const api = express();

api.use(bodyParser.json());

api.use('/', (err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

api.get('/info', (request, response) => {
  response.status(200).send('Working well! Good job!');
});

api.use('/', router);

const server = api.listen(8080, 'localhost', () => {
  console.log("LISTNENING ON localhost:8080")
});

