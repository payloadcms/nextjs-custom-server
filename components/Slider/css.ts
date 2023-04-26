import { createUseStyles } from 'react-jss';

export default createUseStyles({
  wrap: {
    overflow: 'hidden',
  },
  slider: {
    overflowX: 'scroll',
    overflowY:'hidden',
    '-webkit-overflow-scrolling': 'touch',
    display: 'flex',
    '@global': {
      '::-webkit-scrollbar': {
        display: 'none',
      },
    },
  },
  grabCursor: {
    cursor: 'grab',
  },
});
