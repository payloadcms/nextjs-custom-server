import { Block } from 'payload/types';
import { Type as ImageType } from '../../collections/Media';
import backgroundColor, { Type as BackgroundColorType } from '../../fields/backgroundColor';
import HR from '../../components/RichText/elements/HR';
import link, { Type as LinkType } from '../../fields/link';


export type Image = {
  Image: ImageType
  content?: string
  content2?: string
  link: LinkType
}

export type Type = {
  backgroundColor: BackgroundColorType
  content?: unknown
  content2?: unknown
  Image: Image[]
  blockType: 'Image-grid'
}

const ImageGrid: Block = {
  slug: 'Image-grid',
  labels: {
    singular: 'Image Grid',
    plural: 'Image Grids',
  },
  fields: [
    backgroundColor,
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      admin: {
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

    {
      name: 'Image',
      label: 'Image',
      type: 'array',
      minRows: 3,
      maxRows: 12,
      fields: [
        {
          type: 'upload',
          name: 'Image',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'content',
          label: 'Content',
          type: 'textarea',
        },
        {
          name: 'content2',
          label: 'Content2',
          type: 'textarea',
        },
        link,
      ],
    },
  ],
};

export default ImageGrid;
