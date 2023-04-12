import { Block } from 'payload/types';
import link, { Type as LinkType } from '../../fields/link';

export type Action = {
  headline: string
  link: LinkType
}

export type Type = {
  actions: Action[]
  blockType: 'cta-grid'
}

const CTAGrid: Block = {
  slug: 'cta-grid',
  labels: {
    singular: 'CTA Grid',
    plural: 'CTA Grids',
  },
  fields: [
    {
      name: 'actions',
      label: 'Actions',
      type: 'array',
      minRows: 1,
      maxRows: 2,
      fields: [
        {
          name: 'headline',
          label: 'Headline',
          type: 'text',
          required: true,
        },
        link,
      ],
    },
  ],
};

export default CTAGrid;
