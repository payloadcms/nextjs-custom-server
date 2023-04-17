import { createUseStyles } from 'react-jss';
import color from 'color';
import { base } from '../../css/base';
import colors from '../../css/colors';
import { headerHeight, large, strokeWidth } from '../../css/sizes';
import transitions from '../../css/transitions';
import { h4, largeBody } from '../../css/type';
import queries from '../../css/queries';

export const labelHeight = base(6);

export default createUseStyles({
  wrap: {
    position: 'relative',
    paddingBottom: large,
  },
  sticky: {
    position: 'sticky',
    zIndex: 1,
    top: headerHeight,
    bottom: large,
    height: `calc(${labelHeight} * 3)`,
    overflow: 'hidden',
    marginBottom: base(-10),
    [queries.m]: {
      marginBottom: base(-12.5),
    },
  },
  bgGutter: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  bg: {
    height: '100%',
  },
  gradientGutter: {
    position: 'absolute',
    zIndex: 3,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  gradient: {
    background: `linear-gradient(0deg,
      ${colors.red} 5%,
      ${color(colors.red).alpha(0).string()} 35%,
      ${color(colors.red).alpha(0).string()} 65%,
      ${colors.red} 95%)`,
    height: '100%',
  },
  stickyGrid: {
    position: 'relative',
    zIndex: 2,
    color: colors.antique,
  },
  labels: {
    listStyle: 'none',
    margin: `${labelHeight} 0`,
    padding: 0,
    transition: `transform ${transitions.default}ms ease-in-out`,
  },
  label: {
    ...h4,
    margin: 0,
    height: labelHeight,
    display: 'flex',
    alignItems: 'center',
    opacity: 0.3,
    transition: `opacity ${transitions.default}ms linear`,
    hyphens: 'auto',
    [queries.m]: {
      fontSize: base(1.75),
    },
    [queries.s]: {
      fontSize: base(),
    },
  },
  activeLabel: {
    opacity: 1,
  },
  descriptionWrap: {
    position: 'relative',
    zIndex: 2,
  },
  descriptions: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  hr: {
    margin: `0 0 ${base(2)}`,
    width: base(2),
    height: strokeWidth,
    border: 0,
    backgroundColor: colors.gray,
  },
  description: {
    ...largeBody,
    marginBottom: large,
    '&:last-child': {
      marginBottom: 0,
    },
  },
});
