import { Block } from 'payload/types';

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const ContentConfig: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
    },
  ],
};
