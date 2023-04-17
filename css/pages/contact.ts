import { createUseStyles } from 'react-jss';
import { base } from '../base';
import colors from '../colors';
import { headerHeight, strokeWidth } from '../sizes';
import { label } from '../type';

export default createUseStyles({
  contact: {
    height: '100%',
    background: colors.red,
    paddingTop: headerHeight,
    overflow: 'hidden',
  },
  title: {
    ...label,
    color: colors.antique,
  },
  wrap: {
    position: 'relative',
  },
  message: {
    position: 'relative',
    padding: `${base(3)} ${base(3)} ${base(3)} 0`,
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: '-100vh',
      right: 0,
      left: '-100vw',
      background: colors.antique,
    },
  },
  form: {
    position: 'relative',
    zIndex: 2,
  },
  success: {
    position: 'relative',
    zIndex: 2,
  },
  contactInfo: {
    '@global': {
      '*': {
        color: colors.antique,
      },
    },
  },
  instructions: {
    marginTop: 0,
  },
  hr: {
    height: strokeWidth,
    background: colors.gray,
    border: 0,
    width: base(2),
    margin: `${base(2)} 0`,
  },
  section: {
    marginBottom: base(2),
  },
  link: {
    color: colors.antique,
    textDecoration: 'none',
    display: 'inline-flex',

    '&::selection': {
      backgroundColor: colors.antique,
      color: colors.red,
    },
  },
});
