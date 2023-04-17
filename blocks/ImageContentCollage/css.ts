import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import queries from '../../css/queries';
import { large, medium } from '../../css/sizes';
import { h1 } from '../../css/type';

const media = {
  position: 'absolute',
  zIndex: 1,
  '@global': {
    img: {
      width: '100%',
      maxWidth: '100%',
    },
  },
};

export default createUseStyles({
  wrap: {
    overflow: 'hidden',
    paddingTop: large,
    paddingBottom: large,
    [queries.m]: {
      paddingTop: medium,
      paddingBottom: medium,
    },
  },
  bg: {
    padding: `${base(16)} 0`,
    textAlign: 'center',
    position: 'relative',
    [queries.m]: {
      padding: `${base(10)} 0`,
    },
  },
  media: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  media1: {
    ...media,
    width: '22%',
    top: base(-7),
    left: '-5%',
    [queries.xl]: {
      width: '28%',
      top: base(-7),
      left: '4%',
    },
    [queries.m]: {
      width: '45%',
      right: 'unset',
      left: '-10%',
      top: '-15%',
    },
  },
  media2: {
    ...media,
    width: '33%',
    top: '5%',
    right: '-10%',
    [queries.m]: {
      width: '65%',
      right: 'unset',
      left: '70%',
      top: '-15%',
    },
  },
  media3: {
    ...media,
    width: '25%',
    top: '50%',
    right: '-5%',
    [queries.m]: {
      display: 'none',
    },
  },
  media4: {
    ...media,
    width: '22%',
    top: '80%',
    right: '10%',
    [queries.xl]: {
      right: '5%',
    },
    [queries.m]: {
      width: '65%',
      right: 'unset',
      left: '60%',
      top: '65%',
    },
  },
  media5: {
    ...media,
    top: '80%',
    left: '5%',
    width: '33%',
    [queries.m]: {
      width: '65%',
      right: 'unset',
      left: '-45%',
      top: '70%',
    },
    [queries.s]: {
      top: '75%',
      left: '-3%',
      right: 'unset',
      width: '45%',
    },
  },
  media6: {
    ...media,
    left: '-15%',
    width: '35%',
    [queries.m]: {
      display: 'none',
    },
  },
  content: {
    position: 'relative',
    zIndex: 1,
    '@global': {
      h2: {
        ...h1,
      },
      p: {
        maxWidth: base(15),
        margin: '0 auto',
      },
    },
  },
  cta: {
    textDecoration: 'none',
    position: 'relative',
    zIndex: 1,
  },
});

export const buttonCSS = {
  margin: `${base(3)} 0 0`,
};
