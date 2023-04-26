import { Block } from 'payload/types';
import { Type as ImageType } from '../../collections/Media';
import backgroundColor, { Type as BackgroundColorType } from '../../fields/backgroundColor';
import link, { Type as LinkType } from '../../fields/link';

export type Image = {
  Image: ImageType;
  content?: string;
  heading?: string;
  link: LinkType
  position?: string;
};

export type Type = {
  backgroundColor: BackgroundColorType;
  content?: string;
  heading?: string;
  Image: Image[];
  actions: Image[]
  blockType: 'Alt-grid'
};

const AltGrid: Block = {
  slug: 'Alt-grid',
  labels: {
    singular: 'Alt Grid',
    plural: 'Alt Grids',
  },
  fields: [
    backgroundColor,
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },

    {
      name: 'Image',
      label: 'Image',
      type: 'array',
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          type: 'upload',
          name: 'Image',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'heading',
          label: 'Heading',
          type: 'textarea',
        },
        {
          name: 'content',
          label: 'Content',
          type: 'textarea',
        },
          {
      name: 'position',
      label: 'Image position',
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
    },
    {
      name: 'actions',
      label: 'Actions',
      type: 'array',
      minRows: 1,
      maxRows: 2,
      fields: [
        link,
      ],
    },
      ],
    },
  ],
};

export default AltGrid;
