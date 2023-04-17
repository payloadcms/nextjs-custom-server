/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from 'react';
import { Type } from '.';
import useStyles from './css';
import Parallax from '../../components/Parallax';
import Media from '../../components/Media';

const ImageCollage: React.FC<Type> = ({
  Image,
}) => {
  const classes = useStyles();
  const image1 = Image?.[0];
  const image2 = Image?.[1];
  const image3 = Image?.[2];


  return (
    <Fragment>
      <div className={classes.topRow}>
        <Parallax
          yDistance={150}
          className={classes.image1}
        >
          <Media
            {...image1.Image}
          />
        </Parallax>
        <Parallax
          yDistance={100}
          className={classes.image2}
        >
          <Media
            {...image2.Image}
          />
        </Parallax>
      </div>
      <div className={classes.bottomRow}>
        <Parallax
          yDistance={50}
        >
          <Media
            {...image3.Image}
            className={classes.image3}
          />
        </Parallax>
      </div>
    </Fragment>
  );
};

export default ImageCollage;
