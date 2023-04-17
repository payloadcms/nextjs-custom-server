import { createUseStyles } from 'react-jss';

export default createUseStyles({
  '@global': {
    '@keyframes noise': {
      '0%': { transform: 'translate3d(0, 9rem, 0)' },
      '10%': { transform: 'translate3d(-1rem, -4rem, 0)' },
      '20%': { transform: 'translate3d(-8rem, 2rem, 0)' },
      '30%': { transform: 'translate3d(9rem, -9rem, 0)' },
      '40%': { transform: 'translate3d(-2rem, 7rem, 0)' },
      '50%': { transform: 'translate3d(-9rem, -4rem, 0)' },
      '60%': { transform: 'translate3d(2rem, 6rem, 0)' },
      '70%': { transform: 'translate3d(7rem, -8rem, 0)' },
      '80%': { transform: 'translate3d(-9rem, 1rem, 0)' },
      '90%': { transform: 'translate3d(6rem, -5rem, 0)' },
      to: { transform: 'translate3d(-7rem, 0, 0)' },
    },
  },
  noise: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    '&:before': {
      top: '-10rem',
      left: '-10rem',
      width: 'calc(100% + 20rem)',
      height: 'calc(100% + 20rem)',
      content: '""',
      position: 'absolute',
      pointerEvents: 'none',
      backgroundPosition: '50%',
      backgroundImage: 'url(/images/noise.png)',
      animation: 'noise 1s steps(2) infinite',
    },
  },
});
