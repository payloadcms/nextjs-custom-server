import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';

dotenv.config();

// setting env variables for both nextjs and payload to run from the same URL
process.env.PAYLOAD_PUBLIC_SERVER_URL = process.env.SERVER_URL;
process.env.NEXT_PUBLIC_SERVER_URL = process.env.SERVER_URL;

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Media,
  ],
});
