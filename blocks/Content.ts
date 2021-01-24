import { Block } from 'payload/types';

export type ContentType = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

const Content: Block = {
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

export default Content;
