import { GlobalConfig } from 'payload/types';
import link, { Type as LinkType } from '../fields/link';

export type Type = {
  nav: {
    link: LinkType
  }[]
}

const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [
        link,
      ],
    },
  ],
};

export default Footer;
