import * as React from 'react';
import useStyles from './css';

type AbsoluteNoiseProps = {
  className?: string
}

export const AbsoluteNoise:React.FC<AbsoluteNoiseProps> = (props) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <div className={[classes.noise, className && className].filter(Boolean).join(' ')} />
  );
};
