import React, { useState } from 'react';
import { Type } from '.';
import useStyles from './css';
import SliderOnBackground from '../../components/Slider/OnBackground';
import { useGridContainerWidth } from '../../components/layout/GridContainer';

const MediaSlider: React.FC<Type> = ({ backgroundColor, slides,content2, content }) => {
  const classes = useStyles();
  const gridContainerWidth = useGridContainerWidth();
  const [activeSlide, setActiveSlide] = useState(-1); // state to keep track of active slide

  return (
    <SliderOnBackground
      backgroundColor={backgroundColor}
      slides={
        slides?.map(({ media, content, content2 }, i) => (
          <div
            className={classes.slide}
            onMouseEnter={() => setActiveSlide(i)}
            onMouseLeave={() => setActiveSlide(-1)}
          >
            <div className={classes.slideContent}>
              <h4 className={classes.h}>{content}</h4>
              <p className={activeSlide === i ? classes.showSubheading : classes.hideSubheading}>{content2}</p>
            </div>
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
