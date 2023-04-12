import { Block } from 'payload/types';
import backgroundColor, { Type as BackgroundColorType } from '../../fields/backgroundColor';
import { Type as MediaType } from '../../collections/Media';

export type Image = {
  image: MediaType
}

export type Type = {
  backgroundColor: BackgroundColorType
  images: Image[]
  blockType: 'slider'
}

const Slider: Block = {
  slug: 'slider',
  labels: {
    singular: 'Slider',
    plural: 'Sliders',
  },
  fields: [
    backgroundColor,
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      minRows: 3,
      maxRows: 9,
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

export default Slider;
