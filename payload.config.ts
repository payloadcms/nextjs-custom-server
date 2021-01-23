import { buildConfig } from 'payload/config';
import Page from './collections/Page';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  collections: [
    Page,
  ],
});
