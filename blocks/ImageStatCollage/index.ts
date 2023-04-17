import { Block } from 'payload/types';
import { Type as ImageType } from '../../collections/Media';
import overlap, { Type as OverlapType } from '../../fields/overlap';
import stat, { Type as StatType } from '../../fields/stat';

export type Type = {
  Image: {
    Image: ImageType
  }
  stats: {
    stat: StatType[]
  }
  blockType: 'Image-stat-collage'
} & OverlapType

const ImageStatCollage: Block = {
  slug: 'Image-stat-collage',
  labels: {
    singular: 'Image Stat Collage',
    plural: 'Image Stat Collages',
  },
  fields: [
    overlap,
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
      name: 'Image',
      label: 'Image',
      type: 'array',
      minRows: 3,
      maxRows: 4,
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

export default ImageStatCollage;
