import { Block } from 'payload/types';
import backgroundColor, { Type as BackgroundColorType } from '../../fields/backgroundColor';
import { Type as MediaType } from '../../collections/Media';

export type Slide = {
  media: MediaType
}

export type Type = {
  backgroundColor: BackgroundColorType
  slides: Slide[]
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
      name: 'slides',
      label: 'Slides',
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      type: 'array',
      minRows: 3,
      maxRows: 9,
      fields: [
        {
          type: 'upload',
          name: 'media',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};

export default Slider;
