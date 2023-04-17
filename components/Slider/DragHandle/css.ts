import { createUseStyles } from 'react-jss';
import colors from '../../../css/colors';
import queries from '../../../css/queries';
import { label } from '../../../css/type';

export default createUseStyles({
  handleContainer: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    pointerEvents: 'none',
  },
  handle: {
    backgroundColor: colors.antique,
    height: 150,
    width: 150,
    borderRadius: '100%',
    position: 'absolute',
    transition: 'opacity 400ms ease, transform 300ms ease, left 900ms ease, right 900ms ease',
    transform: 'translate3d(-50%, -50%, 0) scale(.1)',
    pointerEvents: 'none',
    color: colors.gray,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    opacity: 0,
    ...label,

    [queries.m]: {
      display: 'none',
    },
  },
  showHandle: {
    '& $handle': {
      opacity: 1,
      transform: 'translate3d(-50%, -50%, 0) scale(1)',
      transition: 'opacity 400ms ease, transform 300ms ease',
    },
  },
});
