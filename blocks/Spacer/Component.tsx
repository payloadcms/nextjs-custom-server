import React from 'react';
import useStyles from './css';
import { Type } from '.';

const Spacer: React.FC<Omit<Type, 'blockType'>> = ({
  size,
}) => {
  const classes = useStyles();

  return (
    <div className={classes[size]} />
  );
};

export default Spacer;
