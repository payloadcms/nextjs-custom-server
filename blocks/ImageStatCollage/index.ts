import { Block } from 'payload/types';
import { Type as MediaType } from '../../collections/Media';
import stat, { Type as StatType } from '../../fields/stat';

export type Image = {
  image: MediaType
}

export type Type = {
  images: Image[]
  stats: StatType[]
  blockType: 'image-stat-collage'
}

const ImageStatCollage: Block = {
  slug: 'image-stat-collage',
  labels: {
    singular: 'Image Stat Collage',
    plural: 'Image Stat Collages',
  },
  fields: [
    {
      name: 'stats',
      label: 'Statistics',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        stat,
      ],
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

export default ImageStatCollage;
