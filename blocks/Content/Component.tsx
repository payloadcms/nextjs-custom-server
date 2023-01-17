import React from 'react';
import { Type } from '.';
import RichText from '../../components/RichText';
import classes from './index.module.css';

export const Component: React.FC<Type> = (props) => {
  const { content } = props;

  return (
    <div className={classes.wrap}>
      <RichText
        content={content}
        className={classes.content}
      />
    </div>
  );
};
