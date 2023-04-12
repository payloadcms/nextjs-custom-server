import React from 'react';
import useStyles from './css';

type Props = {
  className?: string
}

const GridContainer: React.FC<Props> = ({ children, className }) => {
  const classes = useStyles();
  return (
    <div className={[classes.gridContainer, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
};

export default GridContainer;
