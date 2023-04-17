/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Type } from '.';
import useStyles from './css';
import SliderOnBackground from '../../components/Slider/OnBackground';
import { useGridContainerWidth } from '../../components/layout/GridContainer';
import { base } from '../../css/base';

const StudySlider: React.FC<Type> = ({ backgroundColor, studies }) => {
  const classes = useStyles();
  const gridContainerWidth = useGridContainerWidth();

  return (
    <SliderOnBackground
      backgroundColor={backgroundColor}
      slides={
      studies?.map((study, i) => (
        <div
          className={classes.slide}
          style={{
            width: `calc(${gridContainerWidth / 2}px + ${base()})`,
          }}
          key={i}
        >
          <Link
            scroll={false}
            href="/study/[study]"
            as={`/study/${study?.slug}`}
          >
              <img
                src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${study?.featuredImage?.sizes?.portrait?.filename}`}
                alt={study?.featuredImage?.alt}
              />
              {study?.title}

          </Link>
        </div>
      ))
      }
    />
  );
};

export default StudySlider;
