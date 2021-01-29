import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';

dotenv.config();
const serverURL = process.env.SERVER_URL;

export default buildConfig({
  serverURL,
  collections: [
    Page,
    Media,
  ],
});
