import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { Type as ImageType } from '../../../../collections/Media';
import RichText from '../../../RichText';
import GridContainer from '../../GridContainer';
import Gutter from '../../Gutter';
import useStyles from './css';
import Media from '../../../Media';
import { joinClassNames } from '../../../../css/joinClassNames';

type Props = {
  content: unknown
  image?: ImageType
}

const ContentAboveMediaPageHero: React.FC<Props> = ({ content, image }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
      <GridContainer>
        <Grid>
          <Cell
            cols={10}
            start={2}
            colsM={8}
            startM={1}
          >
            <RichText
              className={joinClassNames([classes.afterLoad, classes.richText])}
              content={content}
            />
          </Cell>
        </Grid>
      </GridContainer>
      <Gutter
        left
        right
      >
        <div className={classes.media}>
          <Media {...image} />
        </div>
      </Gutter>
    </div>
  );
};

export default ContentAboveMediaPageHero;
