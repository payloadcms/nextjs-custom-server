import { createUseStyles } from 'react-jss';
import colors from '../../../../../css/colors';
import queries from '../../../../../css/queries';

export default createUseStyles({
  redUnderline: {
    color: 'currentColor',
    backgroundImage: 'linear-gradient(90deg, transparent 0%, transparent 33.33%, currentColor 33.33%, currentColor 66.66%, transparent 66%, transparent 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '300% 6px',
    backgroundPosition: '100% 100%',
    position: 'relative',
  },

  animateWordIn: {
    backgroundPosition: '50% 100%',
    color: colors.red,
    transition: 'background-position 600ms 600ms cubic-bezier(0.4, 0, 0.2, 1), color 600ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  animateWordOut: {
    backgroundPosition: '0% 100%',
    color: 'unset',
    transition: 'background-position 600ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms 100ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  largeIntersection: {
    minHeight: '100vh',
    maxHeight: '100vh',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    backgroundColor: colors.orange,
  },

  '@global': {
    h1: {
      '& $redUnderline': {
        [queries.m]: {
          backgroundSize: '300% 5px',
        },
      },
    },
    h2: {
      '& $redUnderline': {
        [queries.m]: {
          backgroundSize: '300% 4px',
        },
      },
    },
    h3: {
      '& $redUnderline': {
        [queries.m]: {
          backgroundSize: '300% 3px',
        },
      },
    },
    h4: {
      '& $redUnderline': {
        backgroundSize: '300% 4px',

        [queries.m]: {
          backgroundSize: '300% 3px',
        },
      },
    },
    'p, h5, h6': {
      '& $redUnderline': {
        backgroundSize: '300% 3px',

        [queries.m]: {
          backgroundSize: '300% 2px',
        },
      },
    },
  },
});
