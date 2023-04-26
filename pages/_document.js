import React from 'react';
import Document from 'next/document';
import { jss, SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';
import globalPlugin from 'jss-global';

// eslint-disable-next-line import/no-default-export
export default class JssDocument extends Document {
  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    jss.use(globalPlugin());
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => (
        <JssProvider
          registry={registry}
          generateId={generateId}
        >
          <App {...props} />
        </JssProvider>
      ),
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          <link
            href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;1,400;1,500&family=Roboto:ital,wght@0,500;1,500;1,900&display=swap"
            rel="stylesheet"
          />
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </React.Fragment>
      ),
    };
  }
}
