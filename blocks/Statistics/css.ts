import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import queries from '../../css/queries';
import { small, medium, large } from '../../css/sizes';

export default createUseStyles({
  overflow: {
    overflow: 'hidden',
    padding: `${base(25)} 0`,
    margin: `${base(-25)} 0`,
    [queries.m]: {
      padding: `${base(10)} 0`,
      margin: `${base(-10)} 0`,
    },
  },
  wrap: {
    position: 'relative',
    zIndex: 2,
  },
  statistics: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    position: 'relative',
    zIndex: 2,
  },
  gutter: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  bgWrap: {
    position: 'relative',
    height: '100%',
  },
  bg: {
    left: 0,
    right: 0,
    position: 'absolute',
  },
  'top-overlap-small': {
    marginTop: `calc(${small} * -1)`,
    [queries.xl]: {
      marginTop: `calc(${small} * -1)`,
    },
    [queries.m]: {
      marginTop: 0,
    },
  },
  'top-overlap-medium': {
    marginTop: `calc(${medium} * -1)`,
    [queries.xl]: {
      marginTop: `calc(${medium} * -1)`,
    },
    [queries.m]: {
      marginTop: 0,
    },
  },
  'top-overlap-large': {
    marginTop: `calc(${large} * -1)`,
    [queries.xl]: {
      marginTop: `calc(${large} * -1)`,
    },
    [queries.m]: {
      marginTop: 0,
    },
  },
  'bottom-overlap-small': {
    marginBottom: `calc(${small} * -1)`,
    [queries.xl]: {
      marginBottom: `calc(${small} * -1)`,
    },
    [queries.m]: {
      marginBottom: 0,
    },
  },
  'bottom-overlap-medium': {
    marginBottom: `calc(${medium} * -1)`,
    [queries.xl]: {
      marginBottom: `calc(${medium} * -1)`,
    },
    [queries.m]: {
      marginBottom: 0,
    },
  },
  'bottom-overlap-large': {
    marginBottom: `calc(${large} * -1)`,
    [queries.xl]: {
      marginBottom: `calc(${large} * -1)`,
    },
    [queries.m]: {
      marginBottom: 0,
    },
  },
  'top-bg-small': {
    top: small,
    [queries.xl]: {
      top: small,
    },
    [queries.m]: {
      top: 0,
    },
  },
  'top-bg-medium': {
    top: medium,
    [queries.xl]: {
      top: medium,
    },
    [queries.m]: {
      top: 0,
    },
  },
  'top-bg-large': {
    top: large,
    [queries.xl]: {
      top: large,
    },
    [queries.m]: {
      top: 0,
    },
  },
  'bottom-bg-small': {
    bottom: small,
    [queries.xl]: {
      bottom: small,
    },
    [queries.m]: {
      bottom: 0,
    },
  },
  'bottom-bg-medium': {
    bottom: medium,
    [queries.xl]: {
      bottom: medium,
    },
    [queries.m]: {
      bottom: 0,
    },
  },
  'bottom-bg-large': {
    bottom: large,
    [queries.xl]: {
      bottom: large,
    },
    [queries.m]: {
      bottom: 0,
    },
  },
  stat: {
    display: 'flex',
    width: '100%',
  },
  stat1: {
    marginLeft: 'auto',
    marginRight: base(3),
    [queries.xl]: {
      marginRight: base(-2),
    },
    [queries.m]: {
      marginRight: base(-1),
    },
  },
  stat2: {
    margin: `${base(-15)} 0 ${base(-15)} ${base(3)}`,
    [queries.xl]: {
      margin: `${base(-8)} 0 ${base(-15)} -3%`,
    },
    [queries.m]: {
      margin: `${base(-2)} 0 0 ${base(-1)}`,
    },
  },
  stat3: {
    marginRight: base(20),
    marginLeft: 'auto',
    [queries.xxl]: {
      marginRight: base(15),
    },
    [queries.xl]: {
      marginRight: '17%',
    },
    [queries.l]: {
      marginRight: base(2),
    },
  },
});
