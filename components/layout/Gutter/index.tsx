import React from 'react';
import useStyles from './css';

type Props = {
  className?: string
  left?: boolean
  right?: boolean
}

const Gutter: React.FC<Props> = ({ className, left = false, right = false, children }) => {
  const classes = useStyles();

  return (
    <div className={[
      className,
      left && classes.left,
      right && classes.right,
    ].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  );
};

export default Gutter;
