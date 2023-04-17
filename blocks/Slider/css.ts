import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import queries from '../../css/queries';

export default createUseStyles({
  slide: {
    paddingRight: base(2),
    [queries.m]: {
      '@global': {
        img: {
          maxWidth: '60vw !important',
        },
      },
    },
  },
});
