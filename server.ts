import path from 'path';
import next from 'next';
import nextBuild from 'next/dist/build';
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

  if (!process.env.NEXT_BUILD) {
    const nextApp = next({ dev });

    const nextHandler = nextApp.getRequestHandler();

    server.get('*', (req, res) => nextHandler(req, res));

    nextApp.prepare().then(() => {
      console.log('Next.js started');

      server.listen(process.env.PORT, async () => {
        console.log(`Server listening on ${process.env.PORT}...`);
      });
    });
  } else {
    server.listen(process.env.PORT, async () => {
      console.log('Next.js is now building...');
      await nextBuild(path.join(__dirname, '../'));
      process.exit();
    });
  }
};

start();
