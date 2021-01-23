import { CollectionConfig } from 'payload/types';
import formatSlug from '../utilities/formatSlug';

export type IPage = {
  title: string
  slug: string
}

const Page: CollectionConfig = {
  slug: 'pages',
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Page Slug',
      type: 'text',
      hooks: {
        beforeValidate: [
          formatSlug('title'),
        ],
      },
    },
  ],
};

export default Page;
