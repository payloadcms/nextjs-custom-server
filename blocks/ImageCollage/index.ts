import { Block } from 'payload/types';
import { Type as ImageType } from '../../collections/Media';

export type Image = {
  Image: ImageType
}

export type Type = {
  Image: Image[]
  blockType: 'Image-collage'
}

const ImageCollage: Block = {
  slug: 'Image-collage',
  labels: {
    singular: 'Image Collage',
    plural: 'Image Collages',
  },
  fields: [
    {
      name: 'Image',
      label: 'Image',
      type: 'array',
      minRows: 3,
      maxRows: 3,
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

export default ImageCollage;
