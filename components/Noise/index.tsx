import React from 'react';
import { AbsoluteNoise } from './AbsoluteNoise';
import useStyles from './css';

const Noise: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrap}>
      <AbsoluteNoise />
    </div>
  );
};

export default Noise;
