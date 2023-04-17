import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useWindowInfo } from '@faceless-ui/window-info';
import BackgroundColor from '../../layout/BackgroundColor';
import GridContainer from '../../layout/GridContainer';
import Gutter from '../../layout/Gutter';
import Slider, { SliderProvider } from '..';
import { SliderContext } from '../types';
import useStyles from './css';
import { Type as BackgroundColorType } from '../../../fields/backgroundColor';

type Props = {
  backgroundColor: BackgroundColorType
  slides: React.ReactChild[]
}

const SliderOnBackground: React.FC<Props> = ({ backgroundColor, slides }) => {
  const classes = useStyles();
  const { width } = useWindowInfo();
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const [sliderLeftPadding, setSliderLeftPadding] = useState<number>();

  useEffect(() => {
    if (containerRef?.current && gridRef?.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const gridWidth = gridRef.current.offsetWidth;
      const widthToSet = (containerWidth - gridWidth) / 2;
      setSliderLeftPadding(widthToSet);
    }
  }, [width]);

  const [showTrack, setShowTrack] = useState(true);
  useEffect(() => {
    if (slides.length <= 2) {
      setShowTrack(false);
    }
  }, [slides.length]);

  return (
    <div
      className={classes.sliderOnBackground}
      ref={containerRef}
    >
      <Gutter
        right
        className={classes.gutter}
      >
        <BackgroundColor
          color={backgroundColor}
          className={classes.bg}
        />
      </Gutter>
      <SliderProvider>
        {(slider: SliderContext) => (
          <Fragment>
            <div
              className={classes.slider}
            >
              <Slider hideScrollbar>
                {slides.map((slide, i) => (
                  <div
                    style={{
                      marginLeft: i === 0 ? sliderLeftPadding : undefined,
                    }}
                    key={i}
                  >
                    {slide}
                  </div>
                ))}
              </Slider>
            </div>
            {showTrack && (
              <GridContainer className={classes.trackWrap}>
                <div
                  ref={gridRef}
                >
                  <div className={classes.track}>
                    <div
                      className={classes.indicator}
                      style={{ left: `${slider.percentScrolled * 100}%` }}
                    />
                  </div>
                </div>
              </GridContainer>
            )}
          </Fragment>
        )}
      </SliderProvider>
    </div>
  );
};

export default SliderOnBackground;
