import React from 'react';
import { Type } from '../../../fields/backgroundColor';
import useStyles from './css';

const BackgroundColor: React.FC<{ color: Type, className?: string }> = ({ children, color, className }) => {
  const classes = useStyles();

  return (
    <div className={[classes[color], className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

export default BackgroundColor;
