import { createUseStyles } from 'react-jss';
import colors from '../../../css/colors';

export default createUseStyles({
  blue: {
    backgroundColor: colors.blue,
    '@global': {

    },
  },
  red: {
    backgroundColor: colors.red,
    '@global': {
      '*': {
        color: colors.antique,
      },
    },
  },
  orange: {
    backgroundColor: colors.orange,
  },
  gray: {
    backgroundColor: colors.gray,
    '@global': {
      '*': {
        color: colors.antique,
      },
    },
  },
});
