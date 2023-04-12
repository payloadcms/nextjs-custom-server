import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';
import meta, { Type as MetaType } from '../fields/meta';
import { Type as MediaType } from './Media';
import { Type as CategoryType } from './Category';
import { Content, Type as ContentType } from '../blocks/Content';
import { Image, Type as ImageType } from '../blocks/Image';
import Statistics, { Type as StatisticsType } from '../blocks/Statistics';
import Spacer, { Type as SpacerType } from '../blocks/Spacer';
import ImageContentCollage, { Type as ImageContentCollageType } from '../blocks/ImageContentCollage';
import StickyContent, { Type as StickyContentType } from '../blocks/StickyContent';
import CallToAction, { Type as CallToActionType } from '../blocks/CallToAction';
import Slider, { Type as SliderType } from '../blocks/Slider';
import ImageStatCollage, { Type as ImageStatCollageType } from '../blocks/ImageStatCollage';
import ImageGrid, { Type as ImageGridType } from '../blocks/ImageGrid';
import ImageCollage, { Type as ImageCollageType } from '../blocks/ImageCollage';
import StudySlider, { Type as StudySliderType } from '../blocks/StudySlider';
import CTAGrid, { Type as CTAGridType } from '../blocks/CTAGrid';

export type Layout =
  CallToActionType
  | ContentType
  | CTAGridType
  | ImageType
  | ImageCollageType
  | ImageContentCollageType
  | ImageGridType
  | ImageStatCollageType
  | SliderType
  | SpacerType
  | StatisticsType
  | StickyContentType
  | StudySliderType

export type Type = {
  title: string
  featuredImage: MediaType
  previewImages: {
    image: MediaType
  }[]
  client?: string
  location?: string
  categories?: CategoryType[]
  slug: string
  meta: MetaType
}

const Study: CollectionConfig = {
  slug: 'studies',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'featuredImage',
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'layout',
      label: 'Study Layout',
      type: 'blocks',
      blocks: [
        CallToAction,
        Content,
        CTAGrid,
        Image,
        ImageCollage,
        ImageContentCollage,
        ImageGrid,
        ImageStatCollage,
        Slider,
        Spacer,
        Statistics,
        StickyContent,
        StudySlider,
      ],
    },
    {
      name: 'previewImages',
      label: 'Preview Images',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'client',
      label: 'Client',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    slug,
    meta,
  ],
};

export default Study;
