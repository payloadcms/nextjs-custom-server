import React from 'react';
import { Type } from '.';
import useStyles from './css';
import SliderOnBackground from '../../components/Slider/OnBackground';
import { useGridContainerWidth } from '../../components/layout/GridContainer';

const MediaSlider: React.FC<Type> = ({ backgroundColor, slides }) => {
  const classes = useStyles();
  const gridContainerWidth = useGridContainerWidth();

  return (
    <SliderOnBackground
      backgroundColor={backgroundColor}
      slides={
        slides?.map(({ media }, i) => (
          <div
            className={classes.slide}
          >
            <img
              key={i}
              src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${media?.filename}`}
              alt={media?.alt}
              style={{ maxWidth: gridContainerWidth }}
            />
          </div>
        ))
        }
    />
  );
};

export default MediaSlider;
