import { Block } from 'payload/types';

export const Image: Block = {
  slug: 'image',
  labels: {
    singular: 'Image',
    plural: 'Images',
  },
  fields: [
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'type',
      label: 'Type',
      type: 'radio',
      defaultValue: 'normal',
      options: [
        {
          label: 'Normal',
          value: 'normal',
        },
        {
          label: 'Fullscreen',
          value: 'fullscreen',
        },
        {
          label: 'Wide',
          value: 'wide',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'caption',
      label: 'Caption',
      type: 'richText',
      admin: {
        elements: [
          'link',
        ],
      },
    },
  ],
};
