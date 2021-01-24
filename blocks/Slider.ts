import { Block } from 'payload/types';
import { MediaType } from '../collections/Media';

export type Slide = {
  image: MediaType
  content: unknown
}

export type SliderType = {
  blockType: 'slider'
  blockName?: string
  slides: Slide[]
}

const Slider: Block = {
  slug: 'slider',
  labels: {
    singular: 'Slider',
    plural: 'Sliders',
  },
  fields: [
    {
      name: 'slides',
      label: 'Slides',
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      type: 'array',
      minRows: 2,
      maxRows: 10,
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'content',
          label: 'Content',
          type: 'richText',
          required: true,
          admin: {
            elements: [
              'h3',
              'h4',
            ],
          },
        },
      ],
    },
  ],
};

export default Slider;
