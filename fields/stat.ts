import { Field } from 'payload/types';

export type Type = {
  stat: string
  description: string
}

const stat: Field = {
  type: 'row',
  fields: [
    {
      name: 'stat',
      label: 'Statistic',
      type: 'text',
      admin: {
        width: '50%',
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      admin: {
        width: '50%',
      },
    },
  ],
};

export default stat;
