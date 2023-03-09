import { Block } from 'payload/types';

type Data = Record<string, unknown>;

const customURLCondition = (_: Data, siblings: Data): boolean => siblings.type === 'custom';

export const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Buttons',
      minRows: 1,
      maxRows: 2,
      labels: {
        singular: 'Button',
        plural: 'Buttons',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              label: 'Button Label',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'type',
              label: 'Button Type',
              required: true,
              type: 'radio',
              defaultValue: 'page',
              options: [
                {
                  label: 'Page',
                  value: 'page',
                },
                {
                  label: 'Custom URL',
                  value: 'custom',
                },
              ],
              admin: {
                width: '50%',
                layout: 'horizontal',
              },
            },
          ],
        },
        {
          name: 'page',
          label: 'Page to link to',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
          admin: {
            condition: (_: Data, siblings: Data): boolean => siblings.type === 'page',
          },
        },
        {
          name: 'url',
          label: 'Button URL',
          type: 'text',
          required: true,
          admin: {
            condition: customURLCondition,
          },
        },
        {
          name: 'newTab',
          type: 'checkbox',
          label: 'Open in new tab',
          required: true,
          admin: {
            condition: customURLCondition,
          },
        },
      ],
    },
  ],
};
