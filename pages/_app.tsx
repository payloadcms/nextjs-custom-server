import React from 'react';

import { Type as PageType } from '../collections/Page';

import '../css/style.css';

export type AppProps = {
  pageProps: PageType
  Component: any
}

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <Component {...pageProps} />
);

export default MyApp;
