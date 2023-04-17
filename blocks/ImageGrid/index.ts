import { Block } from 'payload/types';
import { Type as ImageType } from '../../collections/Media';
import backgroundColor, { Type as BackgroundColorType } from '../../fields/backgroundColor';

export type Image = {
  Image: ImageType
  content?: string
}

export type Type = {
  backgroundColor: BackgroundColorType
  content?: unknown
  Image: Image[]
  blockType: 'Image-grid'
}

const ImageGrid: Block = {
  slug: 'Image-grid',
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
      name: 'Image',
      label: 'Image',
      type: 'array',
      minRows: 3,
      maxRows: 12,
      fields: [
        {
          type: 'upload',
          name: 'Image',
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
