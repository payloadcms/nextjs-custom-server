import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import queries from '../../css/queries';

export default createUseStyles({
  topRow: {
    display: 'flex',
    paddingBottom: base(7),
    alignItems: 'center',
    [queries.m]: {
      paddingBottom: base(4),
    },
    [queries.s]: {
      display: 'block',
    },
  },
  bottomRow: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  image1: {
    minWidth: '50%',
    [queries.s]: {
      maxWidth: '70%',
      paddingBottom: base(7),
    },
    [queries.xs]: {
      paddingBottom: 0,
      paddingTop: base(4),
    },
  },
  image2: {
    paddingLeft: base(7),
    [queries.m]: {
      paddingLeft: base(4),
    },
    [queries.s]: {
      marginLeft: 'auto',
      maxWidth: '65%',
    },
    [queries.xs]: {
      maxWidth: '80%',
    },
  },
  image3: {
    maxWidth: '100%',
    [queries.xxl]: {
      maxWidth: '60%',
    },
    [queries.s]: {
      maxWidth: '70%',
      margin: `${base(-2)} 0`,
    },
  },
});
