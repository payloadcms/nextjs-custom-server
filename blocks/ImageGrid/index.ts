import { Block } from 'payload/types';
import { Type as MediaType } from '../../collections/Media';
import backgroundColor, { Type as BackgroundColorType } from '../../fields/backgroundColor';

export type Image = {
  image: MediaType
  content?: string
}

export type Type = {
  backgroundColor: BackgroundColorType
  images: Image[]
  blockType: 'image-grid'
}

const ImageGrid: Block = {
  slug: 'image-grid',
  labels: {
    singular: 'Image Grid',
    plural: 'Image Grids',
  },
  fields: [
    backgroundColor,
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      minRows: 3,
      maxRows: 12,
      fields: [
        {
          type: 'upload',
          name: 'image',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'content',
          label: 'Content',
          type: 'textarea',
        },
      ],
    },
  ],
};

export default ImageGrid;
