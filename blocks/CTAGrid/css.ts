import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import colors from '../../css/colors';
import queries from '../../css/queries';
import transitions from '../../css/transitions';
import { h4, h5 } from '../../css/type';

export default createUseStyles({
  CTAGrid: {
    padding: 0,
    '& ul': {
      padding: 0,
      margin: 0,
    },
  },

  gutter: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  bg: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    transition: transitions.ease,
  },
  gridContainer: {
    zIndex: 2,
    width: '100%',
  },
  actionWrap: {
    listStyle: 'none',
    '&:hover': {
      '& $bg': {
        opacity: 0.9,
      },
      '& $arrow': {
        transform: 'translate(6px, 0px)',
      },
    },
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: `${base(2)} 0`,
    [queries.s]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  headline: {
    ...h4,
    color: colors.antique,
    flexGrow: 1,
    marginRight: base(1.5),
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: colors.antique,
    textDecoration: 'none',
    position: 'relative',
  },
  linkText: {
    ...h5,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  },
  arrow: {
    marginLeft: base(),
    maxWidth: '40px',
    transition: `transform ${transitions.default}ms`,
    height: 'auto',
    '& path': {
      stroke: 'currentColor',
    },
    [queries.m]: {
      maxWidth: '30px',
    },
  },
  separator: {
    backgroundColor: colors.antique,
    height: '1px',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
