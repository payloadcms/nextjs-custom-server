import { Block } from 'payload/types';
import { Type as ImageType } from '../../collections/Media';

export type Type = {
  blockType: 'image'
  blockName?: string
  image?: ImageType
  caption?: any
  type: 'normal' | 'wide' | 'fullscreen'
}

export const Image: Block = {
  slug: 'image',
  labels: {
    singular: 'Image Block',
    plural: 'Image Blocks',
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
