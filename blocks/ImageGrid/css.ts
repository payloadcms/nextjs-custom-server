import color from 'color';
import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import colors from '../../css/colors';
import queries from '../../css/queries';
import { large, medium } from '../../css/sizes';
import { body } from '../../css/type';

export default createUseStyles({
  wrap: {
    paddingTop: large,
    paddingBottom: large,
    [queries.m]: {
      paddingTop: medium,
    },
    [queries.xs]: {
      paddingTop: 0,
    },
  },
  bgGutter: {
    position: 'absolute',
    top: '10%',
    right: 0,
    bottom: '10%',
    left: 0,
  },
  bg: {
    height: '100%',
  },
  mediaWrap: {
    position: 'relative',
    '@global': {
      '*': {
        color: colors.antique,
      },
      img: {
        verticalAlign: 'middle',
      },
    },
  },
  content: {
    ...body,
    display: 'flex',
    alignItems: 'flex-end',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: base(2),
    zIndex: 1,
    background: `linear-gradient(180deg,
      ${color(colors.gray).alpha(0).string()} 0%,
      ${color(colors.gray).alpha(0.2).string()} 50%,
      ${color(colors.gray).alpha(0.8).string()} 100%)`,
    whiteSpace: 'pre-wrap',
    [queries.xs]: {
      padding: base(1),
      fontSize: '13px',
      lineHeight: base(1),
    },
  },
});
