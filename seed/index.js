const payload = require('payload');
const path = require('path');

const home = require('./home.json');
const sample = require('./sample.json');

require('dotenv').config();

const { PAYLOAD_SECRET, MONGODB_URI } = process.env;

const createHomePage = async () => {
  await payload.init({
    secret: PAYLOAD_SECRET,
    mongoURL: MONGODB_URI,
    local: true,
  });

  const createdMedia = await payload.create({
    collection: 'media',
    data: {
      alt: 'Payload',
    },
    filePath: path.resolve(__dirname, './payload.jpg'),
  });

  const createdSamplePage = await payload.create({
    collection: 'pages',
    data: sample,
  });

  const homeString = JSON.stringify(home)
    .replace(/{{IMAGE_ID}}/g, createdMedia.id)
    .replace(/{{SAMPLE_PAGE_ID}}/g, createdSamplePage.id);

  await payload.create({
    collection: 'pages',
    data: JSON.parse(homeString),
  });

  console.log('Seed completed!');
  process.exit(0);
};

createHomePage();
