import { Block } from 'payload/types';
import { Type as MediaType } from '../../collections/Media';

export type Image = {
  image: MediaType
}

export type Type = {
  images: Image[]
  blockType: 'image-collage'
}

const ImageCollage: Block = {
  slug: 'image-collage',
  labels: {
    singular: 'Image Collage',
    plural: 'Image Collages',
  },
  fields: [
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

export default ImageCollage;
