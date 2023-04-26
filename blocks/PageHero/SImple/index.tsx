import React from 'react';
import RichText from '../../../components/RichText';
import GridContainer from '../../../components/layout/GridContainer';
import useStyles from './css';

type Props = {
  content: unknown
  title: string
}

const SimplePageHero: React.FC<Props> = ({ title, content }) => {
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

export default SimplePageHero;
