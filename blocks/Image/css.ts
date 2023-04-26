import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import { large, medium } from '../../css/sizes';

export default createUseStyles({
  fullscreen: {
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:large,
  },
  fullscreenParallax: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  fullscreenImage: {
    position: 'relative',
    height: 'calc(100% + 220px)',
    bottom: '110px',
  
    '& img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 1,
    },
  },
  richTextContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
  },

  wide: {
    width: '100%',
    maxWidth: '100%',
  },

  normal: {
    width: '100%',
    maxWidth: '100%',
  },
  cta: {
    textDecoration: 'none',
    position: 'relative',
    zIndex: 1,
  },
  caption:{
    color:'white',
    textAlign:'center',
    paddingTop:'3rem',
  }
});
export const buttonCSS = {
  margin: 'auto',
marginBottom:'3rem',
marginTop:'2rem',
backgroundColor:'gold',
paddingRight:'2rem',
paddingLeft:'2rem',
padding:'3px',
fontWeight:'600',
color:'brown',
borderRadius:'10px',
display:'flex'
};
