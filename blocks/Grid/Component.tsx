/* eslint-disable jsx-a11y/img-redundant-alt */
import { Cell, Grid } from '@faceless-ui/css-grid';
import React from 'react';
import { useWindowInfo } from '@faceless-ui/window-info';
import BackgroundColor from '../../components/layout/BackgroundColor';
import GridContainer from '../../components/layout/GridContainer';
import Gutter from '../../components/layout/Gutter';
import RichText from '../../components/RichText';
import { Type } from '.';
import useStyles from './css';
import Parallax from '../../components/Parallax';
import Media from '../../components/Media';
import mediaProps from './mediaProps';

const LogoGrid: React.FC<Type> = ({
  backgroundColor,
  content,
  Image,
}) => {
  const classes = useStyles();
  const { breakpoints: { l: largeBreak } } = useWindowInfo();

  return (
    <div className={classes.wrap}>
      {content && (
          <Grid>
            <Cell
              cols={4}
              colsM={8}
              className={classes.logoTitle}
            >
              <RichText content={content} />
            </Cell>
          </Grid>
    
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

          <div className={classes.flex}>
          {Image?.map(({ Image: ImageFile, content: ImageContent }, i) => {
              const { yDistance } = mediaProps[i][largeBreak ? 'm' : 'l'];
              const { top } = mediaProps[i][largeBreak ? 'm' : 'l'];

              return (
                <Cell
                  key={i}
                  cols={4}
                >
                
                    <div
                      className={classes.mediaWrap}
                      style={{ position: 'relative', top }}
                    >
                      <Media
                        {...ImageFile}
                        preferredSize="portrait"
                      />
                      <div
                        className={classes.content}
                        dangerouslySetInnerHTML={{ __html: ImageContent }}
                      />
                    </div>
          
                </Cell>
              );
            })}
          </div>


      </div>
    </div>
  );
};

export default LogoGrid;
