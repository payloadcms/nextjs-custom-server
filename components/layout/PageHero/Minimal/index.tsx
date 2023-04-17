import React from 'react';
import RichText from '../../../RichText';
import GridContainer from '../../GridContainer';
import useStyles from './css';

type Props = {
  content: unknown
  title: string
}

const MinimalPageHero: React.FC<Props> = ({ title, content }) => {
  const classes = useStyles();

  return (
    <GridContainer className={classes.wrap}>
      <p className={classes.title}>{title}</p>
      <RichText
        className={classes.richText}
        content={content}
      />
    </GridContainer>
  );
};

export default MinimalPageHero;
