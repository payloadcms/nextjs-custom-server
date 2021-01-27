const payload = require('payload');

require('dotenv').config();

const { PAYLOAD_SECRET_KEY, MONGO_URL } = process.env;

payload.init({
  secret: PAYLOAD_SECRET_KEY,
  mongoURL: MONGO_URL,
  local: true,
});

const createHomePage = async () => {
  const createdMedia = await payload.create({
    collection: 'media',
    data: {
      alt: 'Payload',
    },
    req: {
      file: 'test', // this should be a stream file read by FS
    },
  });

  const createdSamplePage = await payload.create({
    collection: 'pages',
    data: {
      // this should be the data for the sample page
    },
  });

  const createdPage = await payload.create({
    collection: 'pages',
    data: {
      // data for homepage goes here, automatically use
      // ID from the created media where applicable
      // string template?
    },
  });

  process.exit(1);
};

createHomePage();
