import React from 'react';
import getConfig from 'next/config';
import { PayloadAdminBar, PayloadAdminBarProps } from 'payload-admin-bar';

const { publicRuntimeConfig: { SERVER_URL } } = getConfig();

export type Props = {
  id: string
}

const Header: React.FC<Props & PayloadAdminBarProps> = ({ id, collection, onPreviewExit, preview }) => (
  <PayloadAdminBar
    id={id}
    cmsURL={SERVER_URL}
    collection={collection}
    onPreviewExit={onPreviewExit}
    preview={preview}
    logo={(
      <img
        src="/payload.svg"
        alt="Payload Logo"
        width="20px"
        height="20px"
      />
    )}
    style={{
      position: 'relative',
      padding: '10px 5%',
    }}
  />
);

export default Header;
