import { createUseStyles } from 'react-jss';

export default createUseStyles({
  fullscreen: {
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },
  fullscreenParallax: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  fullscreenImage: {
    height: 'calc(100% + 220px)',
    bottom: '110px',
    position: 'relative',

    '& img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  },

  wide: {
    width: '100%',
    maxWidth: '100%',
  },

  normal: {
    width: '100%',
    maxWidth: '100%',
  },
});
