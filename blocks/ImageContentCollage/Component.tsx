/* eslint-disable jsx-a11y/img-redundant-alt */
import { Cell, Grid } from '@faceless-ui/css-grid';
import React from 'react';
import BackgroundColor from '../../components/layout/BackgroundColor';
import GridContainer from '../../components/layout/GridContainer';
import Gutter from '../../components/layout/Gutter';
import RichText from '../../components/RichText';
import Link from '../../components/Link';
import Button from '../../components/Button';
import { Type } from '.';
import useStyles, { buttonCSS } from './css';
import Parallax from '../../components/Parallax';
import Media from '../../components/Media';

const imageSpeeds = [50, 150, 50, 50, 100, 150];

const ImageContentCollage: React.FC<Type> = ({
  backgroundColor,
  content,
  enableCTA,
  link,
  Image,
}) => {
  const classes = useStyles();
   console.log(enableCTA)

  return (
    <Gutter
      className={classes.wrap}
      left
      right
    >
      <BackgroundColor
        color={backgroundColor}
        className={classes.bg}
      >
        {Image?.length > 0 && (
          <ul className={classes.media}>
            {Image?.map((mediaItem, i) => (
              <li
                key={i}
                className={classes[`image${i + 1}`]}
              >
                <Parallax yDistance={imageSpeeds[i]}>
                  <Media {...mediaItem?.Image} />
                </Parallax>
              </li>
            ))}
          </ul>
        )}
        <GridContainer>
          <Grid>
            <Cell
              cols={10}
              start={2}
              startM={1}
            >
              <RichText
                content={content}
                className={classes.content}
              />
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
                </Link>
              )}
            </Cell>
          </Grid>
        </GridContainer>
      </BackgroundColor>
    </Gutter>
  );
};

export default ImageContentCollage;
