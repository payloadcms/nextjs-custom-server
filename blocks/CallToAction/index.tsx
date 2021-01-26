import React from 'react';
import { Block } from 'payload/types';
import { Type as Page } from '../../collections/Page';
import RichText from '../../components/RichText';
import classes from './index.module.css';

export type Button = {
  type: 'page'
  page: Page
} | {
  type: 'url'
  url: string
  newTab: boolean
}

export type Type = {
  blockType: 'cta'
  blockName?: string
  content: unknown
  buttons: Button[]
}

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
      labels: {
        singular: 'Button',
        plural: 'Buttons',
      },
      fields: [
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
            layout: 'horizontal',
          },
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

export const Component: React.FC<Type> = (props) => {
  const { content } = props;

  return (
    <div className={classes.wrap}>
      <RichText
        content={content}
        className={classes.content}
      />
    </div>
  );
};
