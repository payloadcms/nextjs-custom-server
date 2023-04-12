import React from 'react';
import serialize from './serialize';
import useStyles from './css';

const RichText: React.FC<{ className?: string, content: any }> = ({ className, content }) => {
  const classes = useStyles();

  if (!content) {
    return null;
  }

  return (
    <div className={[className, classes.richText].filter(Boolean).join(' ')}>
      {serialize(content)}
    </div>
  );
};

export default RichText;
