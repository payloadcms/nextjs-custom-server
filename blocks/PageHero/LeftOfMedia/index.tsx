import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { Type as ImageType } from '../../../collections/Media';
import RichText from '../../../components/RichText';
import GridContainer from '../../../components/layout/GridContainer';
import useStyles from './css';
import Image from '../../../components/Media';

type Props = {
  content: unknown
  title: string
  image?: ImageType
}

const LeftOfMediaPageHero: React.FC<Props> = ({ title, content, image }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
      <GridContainer>
        <Grid>
          <Cell
            cols={10}
            colsM={8}
          >
            <div className={classes.content}>
              <p className={classes.title}>
                {title}
              </p>
      

              <RichText
                className={classes.richText}
                content={content}
              />
               <button className={classes.button}>Get started</button>
            </div>
          </Cell>
        </Grid>
     

      </GridContainer>
      <div className={classes.media}>
        <Image {...image} />
      </div>
    </div>
  );
};

export default LeftOfMediaPageHero;
