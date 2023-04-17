import { Block } from 'payload/types';
import backgroundColor, { Type as BackgroundColorType } from '../../fields/backgroundColor';
import link, { Type as LinkType } from '../../fields/link';
import { Type as Imagetype } from '../../collections/Media';

export type Image = {
  Image: Imagetype
}

export type Type = {
  backgroundColor: BackgroundColorType
  content: unknown
  enableCTA: boolean
  link: LinkType
  Image: Image[]
  blockType: 'Image-content-collage'
}

const ImageContentCollage: Block = {
  slug: 'Image-content-collage',
  labels: {
    singular: 'Image Content Collage',
    plural: 'Image Content Collages',
  },
  fields: [
    backgroundColor,
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      required: true,
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
    {
      name: 'Image',
      label: 'Image',
      type: 'array',
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          type: 'upload',
          name: 'Image',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};

export default ImageContentCollage;
