import express from 'express';
import {config} from 'dotenv';
import router from './src';

config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api',router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

