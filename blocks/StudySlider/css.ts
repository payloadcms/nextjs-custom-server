import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import colors from '../../css/colors';
import { h4 } from '../../css/type';
import queries from '../../css/queries';

export default createUseStyles({
  slide: {
    paddingRight: base(2),
    '@global': {
      img: {
        width: '100%',
        maxWidth: '100%',
        marginBottom: base(2),
      },
      a: {
        color: colors.antique,
        textDecoration: 'none',
        ...h4,
        [queries.m]: {
          fontSize: '20px',
        },
      },
    },
  },
});
