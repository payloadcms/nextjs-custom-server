import path from 'path';
import next from 'next';
import nextBuild from 'next/dist/build';
import express from 'express';
import payload from 'payload';
import { config as dotenv } from 'dotenv';
import { home } from '../seed/home';
import { sample } from '../seed/sample';

dotenv({
  path: path.resolve(__dirname, '../.env'),
});

const dev = process.env.NODE_ENV !== 'production';
const server = express();

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: server,
    onInit: async () => {
      if (process.env.SEED_DATABASE === 'true') {
        const { id: createdMedia } = await payload.create({
          collection: 'media',
          data: {
            alt: 'Payload',
          },
          filePath: path.resolve(__dirname, './payload.jpg'),
        });

        const { id: createdSamplePage } = await payload.create({
          collection: 'pages',
          data: sample,
        });

        const homeString = JSON.stringify(home)
          .replace(/{{IMAGE_ID}}/g, createdMedia)
          .replace(/{{SAMPLE_PAGE_ID}}/g, createdSamplePage);

        payload.create({
          collection: 'pages',
          data: JSON.parse(homeString),
        });

        console.log('Seed completed!');
      }
    },
  });

  if (!process.env.NEXT_BUILD) {
    const nextApp = next({ dev });

    const nextHandler = nextApp.getRequestHandler();

    server.get('*', (req, res) => nextHandler(req, res));

    nextApp.prepare().then(() => {
      console.log('NextJS started');

      server.listen(process.env.PORT, async () => {
        console.log(`Server listening on ${process.env.PORT}...`);
      });
    });
  } else {
    server.listen(process.env.PORT, async () => {
      console.log('NextJS is now building...');
      await nextBuild(path.join(__dirname, '../'));
      process.exit();
    });
  }
};

start();
