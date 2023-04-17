import React from 'react';
import { PaddingSize } from '../../../blocks/Content';
import useStyles from './css';

const Padding: React.FC<{ top: PaddingSize, bottom: PaddingSize }> = ({ children, top, bottom }) => {
  const classes = useStyles();
  return (
    <div className={[
      classes[`top-${top}`],
      classes[`bottom-${bottom}`],
    ].filter(Boolean).join(' ')}
    >
      { children}
    </div>
  );
};

export default Padding;
