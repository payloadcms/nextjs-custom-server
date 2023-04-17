import { createUseStyles } from 'react-jss';
import queries from '../../../css/queries';
import { small, medium, large } from '../../../css/sizes';

export default createUseStyles({
  'top-small': {
    paddingTop: small,
  },
  'top-medium': {
    paddingTop: medium,
    [queries.m]: {
      paddingTop: `calc(${medium} * .625)`,
    },
  },
  'top-large': {
    paddingTop: large,
    [queries.m]: {
      paddingTop: `calc(${large} * .8)`,
    },
  },
  'bottom-small': {
    paddingBottom: small,
  },
  'bottom-medium': {
    paddingBottom: medium,
    [queries.m]: {
      paddingBottom: `calc(${medium} * .625)`,
    },
  },
  'bottom-large': {
    paddingBottom: large,
    [queries.m]: {
      paddingBottom: `calc(${large} * .8)`,
    },
  },
});
