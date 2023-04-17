import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import colors from '../../css/colors';
import { label } from '../../css/type';

export default createUseStyles({
  button: ({ css }) => ({
    cursor: 'pointer',
    borderRadius: base(2),
    backgroundColor: colors.gray,
    border: 0,
    padding: `0 ${base(2)}`,
    height: base(4),
    display: 'inline-flex',
    alignItems: 'center',
    margin: `${base(2)} auto`,
    boxShadow: 'none',
    ...label,
    ...css,
  }),
  'color-none': {
    color: colors.antique,
  },
  'color-antique': {
    color: colors.antique,
  },
  'color-red': {
    color: colors.red,
  },
  'color-blue': {
    color: colors.blue,
  },
  'color-yellow': {
    color: colors.yellow,
  },
  'color-orange': {
    color: colors.orange,
  },
});
