import { Block } from 'payload/types';
import link, { Type as LinkType } from '../../fields/link';

export type Icon = 'none' | 'arrow';

export type Action = {
  headline: string
  icon?: Icon
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
      maxRows: 4,
      fields: [
        {
          name: 'headline',
          label: 'Headline',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          label: 'Icon',
          type: 'radio',
          defaultValue: 'arrow',
          options: [
            {
              label: 'None',
              value: 'none',
            },
            {
              label: 'Arrow',
              value: 'arrow',
            },
          ],
        },
        link,
      ],
    },
  ],
};

export default CTAGrid;
