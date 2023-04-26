import { createUseStyles } from 'react-jss';
import { base } from '../../../../css/base';
import { medium, small } from '../../../../css/sizes';
import { label } from '../../../../css/type';
import { fadeInUp } from '../css';
import zIndex from '../../../../css/zIndex';

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
  '@keyframes fade-in-up': {
    ...fadeInUp,
  },
  wrap: {
    position: 'relative',
    marginBottom: medium,
    backgroundColor:'#800020',
    zIndex:1
  },
  title: {
    ...label,
    marginBottom: base(2),
    animationName: '$fade-in-up',
    animationDuration: '800ms',
    animationTimingFunction: 'ease',
    animationFillMode: 'both',
  
  },
  richText: {
    animationName: '$fade-in-up',
    animationDuration: '800ms',
    animationTimingFunction: 'ease',
    animationFillMode: 'both',
    animationDelay: '200ms',
  },
  content: {
    paddingTop: small,
    paddingBottom: medium,
    color:'gold',
    fontWeight:'900'
  },
  media: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: '50%',
    zIndex: -1,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 50,
      left: 0,
      width: '100%',
      background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.5))',
    },
    '@global': {
      img: objectFit,
      video: objectFit,
      mixBlendMode: 'screen',
    },
  },
  button: {
    position: 'relative',
    overflow: 'hidden',
    width: '200px',
    height: '50px',
    backgroundColor: '#FFD700',
    color: '#800020',
    borderRadius: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease-in-out',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-80px',
      left: '-80px',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      animation: '$ripple 1s linear infinite',
    },
    '&:hover::before': {
      
      transform: 'scale(1)',
      opacity: 0,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      left: 0,
      width: '100%',
      height: '200%',
      backgroundImage: 'url("path/to/image.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: -1,
      opacity: 0.5,
      transform: 'translateZ(-1px) scale(2)',
      transition: 'all 0.3s ease-in-out',
    },
    '&:hover::after': {
      opacity: 1,
      transform: 'translateZ(-1px) scale(1)',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(0)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(1.5)',
      opacity: 0,
    },
  },
});
