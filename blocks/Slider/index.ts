import { Block } from 'payload/types';
import backgroundColor, { Type as BackgroundColorType } from '../../fields/backgroundColor';
import { Type as MediaType } from '../../collections/Media';

export type Slide = {
  media: MediaType
  content?: string
  content2?: string
}

export type Type = {
  backgroundColor: BackgroundColorType
  slides: Slide[]
  content?: unknown
  content2?: unknown
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
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
    {
      name: 'content2',
      label: 'Content2',
      type: 'richText',
    },
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
        {
          name: 'content',
          label: 'Content',
          type: 'textarea',
        },
        {
          name: 'content2',
          label: 'Content2',
          type: 'textarea',
        },
      ],
    },
  ],
};

export default Slider;
