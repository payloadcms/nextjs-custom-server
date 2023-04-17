import React from 'react';
import { HeroType } from '../../../collections/Page';
import { Type as ImageType } from '../../../collections/Media';
import RichText from '../../RichText';
import ContentAboveMedia from './ContentAboveMedia';
import ContentLeftOfMedia from './ContentLeftOfMedia';
import Minimal from './Minimal';
import { ShowAfterFirstRender } from '../../ShowAfterFirstRender';

type Props = {
  title: string
  type: HeroType
  content: unknown
  image?: ImageType
}

const PageHero: React.FC<Props> = ({ content, type, image, title }) => {
  if (type === 'contentAboveImage') {
    return (
      <ShowAfterFirstRender>
        <ContentAboveMedia
          image={image}
          content={content}
        />
      </ShowAfterFirstRender>
    );
  }

  if (type === 'contentLeftOfImage') {
    return (
      <ShowAfterFirstRender>
        <ContentLeftOfMedia
          title={title}
          image={image}
          content={content}
        />
      </ShowAfterFirstRender>
    );
  }

  if (type === 'minimal') {
    return (
      <ShowAfterFirstRender>
        <Minimal
          content={content}
          title={title}
        />
      </ShowAfterFirstRender>
    );
  }

  return (
    <div>
      <RichText content={content} />
    </div>
  );
};

export default PageHero;
