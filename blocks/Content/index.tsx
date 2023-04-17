import { Block } from 'payload/types';
import backgroundColor, { Type as BackgroundColorType } from '../../fields/backgroundColor';
import RedUnderline from '../../components/RichText/leaves/RedUnderline';
import HR from '../../components/RichText/elements/HR';

export type ColumnWidth = 'oneThird' | 'half' | 'twoThirds' | 'full';

export type Alignment = 'left' | 'center' | 'right';

export type AccentLineAlignment = 'left' | 'right'

export type PaddingSize = 'none' | 'small' | 'medium' | 'large'

export type Column = {
  content: unknown
  width: ColumnWidth
  alignment: Alignment
}

export type Type = {
  blockType: 'content'
  blockName?: string
  columns: Column[]
  accentLine: boolean
  accentLineAlignment: AccentLineAlignment
  paddingTop: PaddingSize
  paddingBottom: PaddingSize
  backgroundColor: BackgroundColorType
}

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    backgroundColor,
    {
      name: 'columns',
      type: 'array',
      minRows: 1,
      labels: {
        singular: 'Column',
        plural: 'Columns',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'width',
              label: 'Column Width',
              type: 'select',
              defaultValue: 'full',
              required: true,
              options: [
                {
                  label: 'One Third',
                  value: 'oneThird',
                },
                {
                  label: 'Half',
                  value: 'half',
                },
                {
                  label: 'Two Thirds',
                  value: 'twoThirds',
                },
                {
                  label: 'Full Width',
                  value: 'full',
                },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'alignment',
              label: 'Alignment',
              type: 'select',
              defaultValue: 'left',
              required: true,
              options: [
                {
                  label: 'Left',
                  value: 'left',
                },
                {
                  label: 'Center',
                  value: 'center',
                },
                {
                  label: 'Right',
                  value: 'right',
                },
              ],
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
          admin: {
            leaves: [
              RedUnderline,
            ],
            elements: [
              'h2',
              'h3',
              'h4',
              'h5',
              'ul',
              'ol',
              HR,
              'link',
            ],
          },
        },
      ],
    },
    {
      name: 'accentLine',
      label: 'Enable Accent Line',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'accentLineAlignment',
      label: 'Accent Line Alignment',
      type: 'radio',
      defaultValue: 'left',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
      admin: {
        condition: (_, siblingData) => Boolean(siblingData.accentLine),
        layout: 'horizontal',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'paddingTop',
          label: 'Padding Top',
          type: 'select',
          defaultValue: 'medium',
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
        },
        {
          name: 'paddingBottom',
          label: 'Padding Bottom',
          type: 'select',
          defaultValue: 'medium',
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
        },
      ],
    },
  ],
};

export default Content;
