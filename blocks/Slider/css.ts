import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import queries from '../../css/queries';
import colors from '../../css/colors';
import color from 'color';

export default createUseStyles({
  slide: {
    position: 'relative', // add relative positioning to parent element
    paddingRight: base(2),
    marginTop:base(2),
    marginRight: base(),
    zIndex:'0',
    height:'100%',
    '&:hover $slideContent': {
      transform: 'translate(-50%, -60%)',
    },
    '&:hover img': {
      transform: 'scale(1.1)',  
    },
    '&:hover h2': {
      marginTop: '-20px',
      transform: 'translateY(-10px)',
    },

    '&:hover p': {
      marginBottom: '-20px',
      transform: 'translateY(10px)',
    },
    '&:hover':{
    // background: `linear-gradient(0deg,
      // ${color(colors.gray).alpha(0).string()} 0%,
      // ${color(colors.gray).alpha(0.2).string()} 50%,
      // ${color(colors.gray).alpha(0.8).string()} 100%)`,
    },
    
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width:'22rem',
      zIndex:1,
      background: `linear-gradient(0deg,
        ${color(colors.gray).alpha(0).string()} 0%,
        ${color(colors.gray).alpha(0.2).string()} 50%,
        ${color(colors.gray).alpha(0.8).string()} 100%)`,
      animation: '$ripple 1s linear infinite',
      '&:hover':{
        transform: 'scale(1.1)',
        width:'28rem',
        },
    },

    // img:{
    //   maxWidth:'100%',   
    // },
    
    [queries.m]: {
      '@global': {
        img: {
          maxWidth: '100% !important',
          width:'22rem',
          height:'26rem',
          objectFit:'cover',
          borderRadius:'10px',
          transition: 'transform 0.3s ease-out',

          '&:hover img': {
            // transform: 'scale(1.1)',
            
          },
      
          '&:hover $slideContent': {
            opacity: 1,
            transform: 'translate(-50%, -60%)',
          },
          '&:hover::before': {
            
            transform: 'scale(1)',
           
          },
        },
      },
    },
  },
  slideContent: {
    position: 'absolute',
    top: '50%', left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#fff',
    opacity: 1,
    width:'85%',
    transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
   zIndex: 1,
    
  },
  hideSubheading:{
    opacity:0,
  },

  showSubheading: {
    opacity: 1,
    width:'100%',
    marginTop:'10rem' ,
    transition: 'margin-bottom 0.3s ease-out, transform 0.3s ease-out',
  },
  h:{
    marginTop:'-1rem',
    width:'100%',
    transition: 'margin-top 0.3s ease-out, transform 0.3s ease-out',
    
  },
  p:{
  
    transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
  }
});