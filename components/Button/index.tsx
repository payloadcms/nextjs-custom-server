import { Styles } from 'react-jss';
import React from 'react';
import { Type as BackgroundColorType } from '../../fields/backgroundColor';
import useStyles from './css';

type Props = {
  label: string
  color?: BackgroundColorType
  className?: string
  css?: Styles
}

const Button: React.FC<Props> = ({ label, color = 'antique', css }) => {
  const classes = useStyles({ css });

  return (
    <button
      type="button"
      className={[
        classes.button,
        classes[`color-${color}`],
      ].filter(Boolean).join(' ')}
    >
      {label}
    </button>
  );
};

export default Button;
