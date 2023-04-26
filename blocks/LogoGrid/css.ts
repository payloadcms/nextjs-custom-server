import color from 'color';
import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import colors from '../../css/colors';
import queries from '../../css/queries';
import { large, medium, small } from '../../css/sizes';
import { body } from '../../css/type';



export default createUseStyles({

  '@keyframes slide': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(0)' }
  },
  wrap: {
    paddingTop: small,
    paddingBottom: small,
    marginLeft:small,
    marginRight:small,
    display:'flex',
    overflowX:'hidden',
    flexWrap:'wrap',
 
    // backgroundColor:colors.red,
    marginTop:'-11.5rem',
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
    // height: '100%',

  },
  mediaWrap: {
    // position: 'relative',
    display:'contents',
    width:'100%',
    animation: '$slide 5s ease-in-out forwards infinite',
 
    
    '@global': {
      '*': {
        color: colors.antique,
      },
      img: {
        verticalAlign: 'middle',
        height:'12rem',
        width:'12rem',
        objectFit:'scale-down',
        animation: '$slide 5s ease-in-out forwards infinite',
        // filter: 'grayscale(100%)',
        
      },
    },
  },
  flex:{
    display:'flex',
    flexDirection:'row',
    columnGap:'5rem',
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
    // background: `linear-gradient(180deg,
    //   ${color(colors.gray).alpha(0).string()} 0%,
    //   ${color(colors.gray).alpha(0.2).string()} 50%,
    //   ${color(colors.gray).alpha(0.8).string()} 100%)`,
    // whiteSpace: 'pre-wrap',
    [queries.xs]: {
      padding: base(1),
      fontSize: '13px',
      lineHeight: base(1),
    },
  },
  logoTitle:{
    color:'brown',
    fontSize:'2rem'
  }
});
