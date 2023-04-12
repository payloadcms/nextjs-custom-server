import { Block } from 'payload/types';
import backgroundColor, { Type as BackgroundColorType } from '../../fields/backgroundColor';
import link, { Type as LinkType } from '../../fields/link';
import { Type as MediaType } from '../../collections/Media';

export type Image = {
  image: MediaType
}

export type Type = {
  backgroundColor: BackgroundColorType
  content: unknown
  enableCTA: boolean
  link: LinkType
  images: Image[]
  blockType: 'image-content-collage'
}

const ImageContentCollage: Block = {
  slug: 'image-content-collage',
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
        condition: (_, siblingData) => siblingData.enableCTA,
      },
    },
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          type: 'upload',
          name: 'image',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};

export default ImageContentCollage;
