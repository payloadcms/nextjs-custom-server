import { createUseStyles } from 'react-jss';
import { base } from '../../../css/base';
import colors from '../../../css/colors';
import queries from '../../../css/queries';
import transitions from '../../../css/transitions';

export default createUseStyles({
  footer: {
    position: 'relative',
    overflow: 'hidden',
    marginTop: base(8),
  },
  bgWrap: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  bg: {
    background: colors.gray,
    height: '100%',
  },
  wrap: {
    paddingTop: base(8),
    paddingBottom: base(7),
    position: 'relative',
    zIndex: 2,
    [queries.m]: {
      paddingTop: base(8),
      paddingBottom: 0,
    },
  },
  nav: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  section: {
    marginBottom: base(2),
  },
  link: {
    color: colors.antique,
    textDecoration: 'none',
    '&:hover': {
      transition: `all ${transitions.default}ms linear`,
      color: colors.blue,
    },
  },
  social: {
    listStyle: 'none',
    padding: 0,
    margin: `${base(4)} 0`,
  },
  ctaWrap: {
    position: 'absolute',
    bottom: base(-8),
    left: base(-7),
    [queries.l]: {
      bottom: base(-3),
      left: base(-4.5),
    },
    [queries.m]: {
      position: 'relative',
      left: base(-6),
      bottom: base(-2),
      marginBottom: base(-3),
    },
  },
  backToTop: {
    position: 'absolute',
    zIndex: 3,
    right: base(2),
    bottom: base(2),
    border: 0,
    background: 'none',
    boxShadow: 'none',
    transition: `opacity ${transitions.default}ms linear`,
    cursor: 'pointer',
    padding: 0,
    '&:active': {
      outline: 0,
    },
    '&:focus': {
      outline: 0,
    },
    '&:hover': {
      opacity: 0.5,
    },
    [queries.m]: {
      display: 'none',
    },
  },
  backToTopArrow: {
    transform: 'rotate(-90deg)',
  },
  copyright: {
    color: colors.antique,
  },
  ctaCSS: {
    width: `${base(30)} !important`,
    height: `${base(30)} !important`,
    [queries.l]: {
      width: `${base(25)} !important`,
      height: `${base(25)} !important`,
    },
    [queries.m]: {
      width: `${base(22)} !important`,
      height: `${base(22)} !important`,
    },
  },
});
