import React from 'react';
import useStyles from './css';

type Props = {
  className?: string
}

const LargeBody: React.FC<Props> = ({ children, className }) => {
  const { largeBody } = useStyles();

  return (
    <div className={[largeBody, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
};

export default LargeBody;
