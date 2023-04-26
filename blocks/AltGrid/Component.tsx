/* eslint-disable jsx-a11y/img-redundant-alt */
import { Cell, Grid } from '@faceless-ui/css-grid';
import React from 'react';
import { useWindowInfo } from '@faceless-ui/window-info';
import BackgroundColor from '../../components/layout/BackgroundColor';
import GridContainer from '../../components/layout/GridContainer';
import Gutter from '../../components/layout/Gutter';
import RichText from '../../components/RichText';
import { Type } from '.';
import useStyles, { buttonCSS } from './css';
import Parallax from '../../components/Parallax';
import Media from '../../components/Media';
import mediaProps from './mediaProps';
import Link from '../../components/Link';
import Button from '../../components/Button';

const AltGrid: React.FC<Type> = ({
  backgroundColor,
  content,
  actions,
  heading,
  Image,
}) => {
  const classes = useStyles();
  const { breakpoints: { l: largeBreak } } = useWindowInfo();

  return (
    <div className={classes.wrap } >
      {content && (
        <GridContainer>
          <Grid>
            <Cell
              cols={8}
              colsM={8}
            >
              <RichText content={content} />
            </Cell>
          </Grid>
        </GridContainer>
      )}
      <div className={classes.mediaWrap}>
        <Gutter
          left
          className={classes.bgGutter}
        >
          <BackgroundColor
            color={backgroundColor}
            className={classes.bg}
          />
        </Gutter>
        {/* <GridContainer>
          <Grid> */}
            {Image?.map(({ Image: ImageFile, content: ImageContent, heading:Imageheading }, i) => {
              const { yDistance } = mediaProps[i][largeBreak ? 'm' : 'l'];
              const isLeft = i % 2 === 0;

              return (
                <Cell
                  key={i}
                  cols={4}
                  className={isLeft ? classes.left : classes.right}
                >
                  <Parallax yDistance={yDistance}>
                    <div 
                     className={isLeft ? classes.left : classes.right}>
                    <div
          className={`${classes.mediaWrap} ${isLeft ? classes.leftside : classes.rightside}`}
          style={{ position: 'relative' }}
        >                   
                    <div className={classes.circle}></div>
                        <Media
                          {...ImageFile}
                          preferredSize="portrait"
                          className={classes.rain}
                        />
                      </div>
                      <div style={{display:'flex',flexDirection:'column'}}>
                      <div
                    className={`${classes.heading} ${isLeft ? classes.right : classes.lefthead}`}
                    dangerouslySetInnerHTML={{ __html: Imageheading }}
                    />
                    <div
                    className={`${classes.content} ${isLeft ? classes.right : classes.leftcontent}`}
                    dangerouslySetInnerHTML={{ __html: ImageContent }}
                    />

                    </div>
                    <ul className={classes.actions}>
          {actions?.map(({ link }, i) => (
            <li
              key={i}
              className={classes.action}
            >
              <Link
                {...link}
                className={classes.link}
              >
                <Button
                  color={backgroundColor}
                  label={link.label}
                />
              </Link>
            </li>
          ))}
        </ul>
                    </div>
                    
                  </Parallax>
                </Cell>
              );
            })}

             
          {/* </Grid>
        </GridContainer> */}
      </div>
    </div>
  );
};

export default AltGrid;
