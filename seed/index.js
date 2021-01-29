const payload = require('payload');
const path = require('path');
const fs = require('fs');
const {Readable} = require('stream');

const home = require('./home.json');
const sample = require('./sample.json');

require('dotenv').config();

const {PAYLOAD_SECRET_KEY, MONGO_URL} = process.env;

payload.init({
  secret: PAYLOAD_SECRET_KEY,
  mongoURL: MONGO_URL,
  local: true,
});

/**
 * Save buffer data to a file.
 * @param {Buffer} buffer - buffer to save to a file.
 * @param {string} filePath - path to a file.
 */
const saveBufferToFile = async (buffer, filePath) => {
  // Setup readable stream from buffer.
  let streamData = buffer;
  let readStream = Readable();
  readStream._read = () => {
    readStream.push(streamData);
    streamData = null;
  };
  // Setup file system writable stream.
  return fs.writeFileSync(filePath, buffer);
};

const createHomePage = async () => {
  const fileRead = fs.readFileSync(path.resolve(__dirname, './payload.jpg'));
  const file = {
    name: 'payload.jpg',
    data: fileRead,
    mimetype: 'image/jpeg',
    mv: async (filePath) => {
      return saveBufferToFile(fileRead, filePath);
    }
  };

  const createdMedia = await payload.create({
    collection: 'media',
    data: {
      alt: 'Payload',
      name: 'Payload',
      filename: 'payload.jpg',
    },
    file,
  });

  const createdSamplePage = await payload.create({
    collection: 'pages',
    data: sample
  });

  home.layout = home.layout
    .map((block) => {
      if (block.blockType === 'image') {
        block.image = createdMedia.id;
      }
      if (block.blockType === 'cta') {
        block.buttons.map((button) => {
          if (button.type === 'page') {
            button.page = createdSamplePage.id;
          }
        })
      }
      return block;
    });
  home.image = createdMedia.id;

  const createdPage = await payload.create({
    collection: 'pages',
    data: home,
  });

  console.log('Seed completed!')
  process.exit(0);
};

createHomePage();
