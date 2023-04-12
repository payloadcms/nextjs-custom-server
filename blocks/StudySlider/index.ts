import { Block } from 'payload/types';
import backgroundColor, { Type as BackgroundColorType } from '../../fields/backgroundColor';
import { Type as StudyType } from '../../collections/Study';

export type Type = {
  backgroundColor: BackgroundColorType
  studies: StudyType[]
  blockType: 'study-slider'
}

const StudySlider: Block = {
  slug: 'study-slider',
  labels: {
    singular: 'Study Slider',
    plural: 'Study Sliders',
  },
  fields: [
    backgroundColor,
    {
      name: 'studies',
      type: 'relationship',
      relationTo: 'studies',
      hasMany: true,
      required: true,
    },
  ],
};

export default StudySlider;
