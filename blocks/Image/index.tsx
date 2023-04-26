import { Block } from 'payload/types';
import backgroundColor, { Type as BackgroundColorType } from '../../fields/backgroundColor';
import { Type as ImageType } from '../../collections/Media';
import link, { Type as LinkType } from '../../fields/link';
import HR from '../../components/RichText/elements/HR';

export type Type = {
  blockType: 'image'
  backgroundColor: BackgroundColorType
  blockName?: string
  image?: ImageType
  enableCTA: boolean
  link: LinkType,
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

    },
    {
      name: 'enableCTA',
      label: 'Enable Call to Action',
      type: 'checkbox',
    },
    {
      ...link,
      admin: {
        condition: (_, siblingData) => Boolean(siblingData.enableCTA),
      },
    },
  ],
};
