import { createUseStyles } from 'react-jss';
import { base } from '../base';
import colors from '../colors';
import queries from '../queries';
import { headerHeight, large } from '../sizes';
import { h2, label } from '../type';

const objectFit = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  objectFit: 'cover',
  objectPosition: 'center',
};

export default createUseStyles({
  studies: {
    height: '100%',
    paddingTop: headerHeight,
  },
  header: {
    marginBottom: base(3),
  },
  label: {
    ...label,
    color: colors.gray,
    textDecoration: 'none',
  },
  title: {
    ...h2,
  },
  featuredMediaWrap: {
    paddingTop: base(20),
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
  },
  featuredMediaGutter: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  featuredMedia: {
    '@global': {
      img: objectFit,
      video: objectFit,
    },
  },
  meta: {
    position: 'relative',
    zIndex: 2,
    listStyle: 'none',
    margin: 0,
    padding: `${base(4)} 0`,
    display: 'flex',
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: 0,
      width: '100vw',
      bottom: 0,
      left: 0,
      backgroundColor: colors.antique,
    },
    [queries.m]: {
      padding: `${base(3)} 0`,
    },
  },
  metaLabel: {
    opacity: 0.5,
    marginBottom: base(),
    [queries.m]: {
      marginBottom: 0,
    },
  },
  backgroundNoise: {
    width: '100vw',
    overflow: 'hidden',
    pointerEvents: 'none',
  },
});
