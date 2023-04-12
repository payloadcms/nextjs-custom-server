import React from 'react';
import colors from '../../../../../css/colors';

const RedHeadline: React.FC<any> = ({ attributes, children }) => (
  <span
    {...attributes}
    style={{ color: colors.red, textTransform: 'uppercase' }}
  >
    {children}
  </span>
);

export default RedHeadline;
