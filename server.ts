import next from 'next';
import express from 'express';
import payload from 'payload';
import { config as dotenv } from 'dotenv';

dotenv();

const dev = process.env.NODE_ENV !== 'production';
const server = express();

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: server,
  });

  const nextApp = next({ dev });

  const nextHandler = nextApp.getRequestHandler();

  server.get('*', (req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    console.log('NextJS started'); // eslint-disable-line no-console

    server.listen(process.env.PORT, async () => {
      console.log(`Server listening on ${process.env.PORT}...`); // eslint-disable-line no-console
    });
  });
};

start();
