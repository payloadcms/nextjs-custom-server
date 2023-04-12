import React from 'react';
import { Block } from 'payload/types';
import { Type as MediaType } from '../../collections/Media';
import RichText from '../../components/RichText';

export type Type = {
  blockType: 'image'
  blockName?: string
  image: MediaType
  caption?: any
  type: 'normal' | 'wide' | 'fullscreen'
}

export const Image: Block = {
  slug: 'image',
  labels: {
    singular: 'Image',
    plural: 'Images',
  },
  fields: [
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'type',
      label: 'Type',
      type: 'radio',
      defaultValue: 'normal',
      options: [
        {
          label: 'Normal',
          value: 'normal',
        },
        {
          label: 'Fullscreen',
          value: 'fullscreen',
        },
        {
          label: 'Wide',
          value: 'wide',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'caption',
      label: 'Caption',
      type: 'richText',
      admin: {
        elements: [
          'link',
        ],
      },
    },
  ],
};

export const Component: React.FC<Type> = (props) => {
  const { image, type, caption } = props;

  if (typeof image === 'object') {
    let filenameToRender = image.filename;
    if (image.sizes[type]) filenameToRender = image.sizes[type];

    return (
      <div>
        <img
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${filenameToRender}`}
          alt={image.alt}
        />
        {caption && (
          <RichText
            content={caption}
          />
        )}
      </div>
    );
  }

  return null;
};
