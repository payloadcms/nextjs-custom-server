import React from 'react';
import GridContainer from '../../components/layout/GridContainer';
import Gutter from '../../components/layout/Gutter';
import { Type } from '.';
import useStyles from './css';
import Parallax from '../../components/Parallax';
import ImageComponent from '../../components/Media';

const Image: React.FC<Type> = (props) => {
  const { image, type } = props;
  const classes = useStyles();

  if (typeof image === 'object') {
    if (type === 'fullscreen') {
      const parallaxDistance = 100;

      return (
        <div className={classes.fullscreen}>
          <Parallax
            className={classes.fullscreenParallax}
            yDistance={parallaxDistance}
          >
            <ImageComponent
              className={classes.fullscreenImage}
              {...image}
            />
          </Parallax>
        </div>
      );
    }

    if (type === 'wide') {
      return (
        <Gutter
          left
          right
        >
          <ImageComponent
            className={classes.wide}
            {...image}
          />
        </Gutter>
      );
    }

    return (
      <GridContainer>
        <ImageComponent
          className={classes.wide}
          {...image}
        />
      </GridContainer>
    );
  }

  return null;
};

export default Image;
