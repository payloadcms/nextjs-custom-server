import { Field } from 'payload/types';

export type Sizes = 'none' | 'small' | 'medium' | 'large';

export type Type = {
  topOverlap: Sizes
  bottomOverlap: Sizes
}

const getOverlap = (name: string): Field => ({
  name,
  type: 'select',
  defaultValue: 'none',
  options: [
    {
      label: 'None',
      value: 'none',
    },
    {
      label: 'Small',
      value: 'small',
    },
    {
      label: 'Medium',
      value: 'medium',
    },
    {
      label: 'Large',
      value: 'large',
    },
  ],
  admin: {
    width: '50%',
  },
});

const overlap: Field = {
  type: 'row',
  fields: [
    getOverlap('topOverlap'),
    getOverlap('bottomOverlap'),
  ],
};

export default overlap;
