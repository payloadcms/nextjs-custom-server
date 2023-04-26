import React from 'react';
import GridContainer from '../../components/layout/GridContainer';
import Gutter from '../../components/layout/Gutter';
import { Type } from '.';
import useStyles, { buttonCSS } from './css';
import Parallax from '../../components/Parallax';
import ImageComponent from '../../components/Media';
import RichText from '../../components/RichText';
import BackgroundColor from '../../components/layout/BackgroundColor';
import Link from '../../components/Link';
import Button from '../../components/Button';
import {BsBookmarkHeartFill} from 'react-icons/bs'

const Image: React.FC<Type> = (props) => {
  const { image, type,caption,  backgroundColor, enableCTA,link, } = props;
  const classes = useStyles();

  if (typeof image === 'object') {
    if (type === 'fullscreen') {
      const parallaxDistance = 100;

      return (
        <div className={classes.fullscreen}>
<Parallax className={classes.fullscreenParallax} yDistance={parallaxDistance}>
  <ImageComponent className={classes.fullscreenImage} {...image} {...caption} />
  <div >
  <BackgroundColor color={backgroundColor}>
      <div className={classes.richTextContainer}>
        <RichText content={caption} className={classes.caption} />
        {enableCTA && (
                <Link
                  {...link}
                  className={classes.cta}
                >
                  <Button
                    color={backgroundColor}
                    label={link.label}
                    css={buttonCSS}
                    
                  />
                  <BsBookmarkHeartFill style={{color:'white', fontSize:"3rem"}} />
                  
                </Link>
                
              )}
      </div>
    </BackgroundColor>
  </div>
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
            {...caption}
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
