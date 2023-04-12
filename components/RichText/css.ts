import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import colors from '../../css/colors';
import { strokeWidth } from '../../css/sizes';

export default createUseStyles({
  richText: {
    '@global': {
      '*': {
        whiteSpace: 'pre-wrap',
      },
      '> *:first-child': {
        marginTop: 0,
      },
      hr: {
        borderRadius: 0,
        height: strokeWidth,
        margin: `${base(4)} 0`,
        width: base(2),
        border: 0,
        background: colors.gray,
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
        position: 'relative',
        display: 'inline-flex',
        padding: '0px 2px',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          top: 0,
          left: 0,
          transform: 'translateY(calc(100% - 2px))',
          width: '100%',
          height: '100%',
          backgroundColor: colors.red,
          opacity: 0.85,
          transition: 'transform .25s ease-out',
        },
        '&:hover': {
          color: colors.antique,
          '&:before': {
            transform: 'translateY(0)',
            transition: 'transform .25s ease-out',
          },
        },
      },
    },
  },
});
