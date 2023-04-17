/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import Link from 'next/link';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { Type as StudyType } from '../../../../collections/Study';
import GridContainer from '../../../layout/GridContainer';
import useStyles from './css';
import Button from '../../../Button';
import Parallax from '../../../Parallax';
import Media from '../../../Media';
import Gutter from '../../../layout/Gutter';

const StudyPreviewTwo: React.FC<StudyType> = (props) => {
  const { title, meta, slug, previewMedia } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <GridContainer>
        <h2>
          <Link href={`/study/${slug}`}>
            <a className={classes.title}>
              {title}
            </a>
          </Link>
        </h2>
        <Grid>
          <Cell
            cols={6}
            startM={2}
          >
            <p>
              {meta?.description}
            </p>
            <Link href={`/study/${slug}`}>
              <a className={classes.link}>
                <Button label="Read the study" />
              </a>
            </Link>
          </Cell>
        </Grid>
      </GridContainer>
      <Gutter
        left
        right
        className={classes.media}
      >
        {previewMedia?.[0]?.media && (
          <div
            className={classes.previewMediaOne}
          >
            <Parallax yDistance={100}>
              <Media
                preferredSize="portrait"
                {...previewMedia[0].media}
              />
            </Parallax>
          </div>
        )}
        {previewMedia?.[1]?.media && (
          <div
            className={classes.previewMediaTwo}
          >
            <Parallax yDistance={50}>
              <Media
                preferredSize="portrait"
                {...previewMedia[1].media}
              />
            </Parallax>
          </div>
        )}
      </Gutter>
    </Fragment>
  );
};

export default StudyPreviewTwo;
