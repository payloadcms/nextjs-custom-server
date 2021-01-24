import { CollectionConfig } from 'payload/types';

export type MediaType = {
  filename: string
}

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: (): boolean => true, // Everyone can read Media
  },
  upload: {
    imageSizes: [
      {
        name: 'card',
        width: 640,
        height: 480,
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
    },
  ],
};

export default Media;
