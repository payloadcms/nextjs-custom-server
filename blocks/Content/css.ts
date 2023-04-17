import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import colors from '../../css/colors';
import queries from '../../css/queries';
import { strokeWidth } from '../../css/sizes';

export default createUseStyles({
  content: {
    overflow: 'hidden',
  },
  'align-center': {
    textAlign: 'center',
    '@global': {
      p: {
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  },
  'align-right': {
    textAlign: 'right',
  },
  gridContainer: {
    position: 'relative',
  },
  accentLine: {
    backgroundColor: colors.gray,
    position: 'absolute',
    top: base(),
    pointerEvents: 'none',
    width: '100vw',
    height: strokeWidth,
    [queries.l]: {
      display: 'none',
    },
  },
  'accentLine-left': {
    right: '100%',
  },
  'accentLine-right': {
    left: '100%',
  },
});
