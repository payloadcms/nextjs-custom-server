import { createUseStyles } from 'react-jss';
import { base } from '../../../css/base';
import colors from '../../../css/colors';
import transitions from '../../../css/transitions';
import { body } from '../../../css/type';

export default createUseStyles({
  wrap: {
    position: 'relative',
  },
  email: ({ showError }) => ({
    width: '100%',
    height: base(4),
    lineHeight: base(3),
    padding: `${base(0.5)} ${base(4)} ${base(0.5)} ${base(1.5)}`,
    border: `1px solid ${showError ? colors.red : colors.gray}`,
    borderRadius: '100px',
    boxShadow: 'none',
    background: 'transparent',
    ...body,
    color: showError ? colors.red : colors.gray,
    '&:focus': {
      outline: 'none',
    },
    '&:active': {
      outline: 'none',
    },
  }),
  button: {
    position: 'absolute',
    top: base(0.5),
    right: base(0.5),
    padding: 0,
    border: `1px solid ${colors.red}`,
    borderRadius: '100px',
    boxShadow: 'none',
    background: 'transparent',
    width: base(3),
    height: base(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: colors.red,
    transition: transitions.ease,
    outline: 'none',

    '@global': {
      svg: {
        width: base(2),
        height: base(2),
      },
    },

    '&:hover, &:focus': {
      color: colors.antique,
      backgroundColor: colors.red,
    },
  },
});
