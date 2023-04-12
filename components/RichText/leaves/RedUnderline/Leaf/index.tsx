import React from 'react';
import colors from '../../../../../css/colors';

const RedUnderline: React.FC<any> = ({ attributes, children }) => (
  <span
    {...attributes}
    style={{ color: colors.red, textDecoration: 'underline' }}
  >
    {children}
  </span>
);

export default RedUnderline;
