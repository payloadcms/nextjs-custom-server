import color from 'color';
import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import colors from '../../css/colors';
import queries from '../../css/queries';
import { large, medium, small } from '../../css/sizes';
import { body } from '../../css/type';
import { fadeInUp } from './animation';

export default createUseStyles({
  '@keyframes fade-in-up': {
    ...fadeInUp,
  },
  wrap: {
    // paddingTop: '-5rem !important',
    // paddingBottom: large,
backgroundImage:" url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1021%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient1022)'%3e%3c/rect%3e%3cpath d='M-65.50044181171862 107.57387770741502L90.26644575550165 170.50778540128823 153.20035344937486 14.740897834067965-2.566534117845407-48.193009859805244z' fill='rgba(158%2c 209%2c 216%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M137.273%2c272.692C188.613%2c272.541%2c240.206%2c255.925%2c267.831%2c212.651C297.542%2c166.11%2c299.788%2c107.149%2c274.181%2c58.23C246.572%2c5.486%2c196.789%2c-38.195%2c137.273%2c-36.762C79.541%2c-35.372%2c38.257%2c13.473%2c11.326%2c64.558C-13.497%2c111.643%2c-22.178%2c167.885%2c5.378%2c213.424C32.124%2c257.623%2c85.612%2c272.844%2c137.273%2c272.692' fill='rgba(158%2c 209%2c 216%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M-40.31 -34.35 a5.96 5.96 0 1 0 11.92 0 a5.96 5.96 0 1 0 -11.92 0z' fill='rgba(158%2c 209%2c 216%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1264.373475349586 0.2172354370442804L1321.8328594282982 158.08559572907689 1479.701219720331 100.62621165036455 1422.2418356416185-57.242148641668045z' fill='rgba(158%2c 209%2c 216%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1231.27 22.07 a118.8 118.8 0 1 0 237.6 0 a118.8 118.8 0 1 0 -237.6 0z' fill='rgba(158%2c 209%2c 216%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1290.6666666666665 149.33333333333331L1458.6666666666665 149.3333333333333 1458.6666666666665-18.666666666666714 1290.6666666666665-18.666666666666686z' fill='rgba(158%2c 209%2c 216%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M55.99999999999998 372.0067341785112L-62.793939239339984 490.80067341785116 56.00000000000001 609.5946126571912 174.79393923933998 490.80067341785116z' fill='rgba(158%2c 209%2c 216%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M-57.79 431.13 a40.92 40.92 0 1 0 81.84 0 a40.92 40.92 0 1 0 -81.84 0z' fill='rgba(158%2c 209%2c 216%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M-70.1 443.43 a65.53 65.53 0 1 0 131.06 0 a65.53 65.53 0 1 0 -131.06 0z' fill='rgba(158%2c 209%2c 216%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1201.66 499.66 a178 178 0 1 0 356 0 a178 178 0 1 0 -356 0z' fill='rgba(158%2c 209%2c 216%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1437.686497848844 383.4181515693665L1280.8449861973143 443.62396709297695 1341.0508017209247 600.4654787445069 1497.8923133724545 540.2596632208964z' fill='rgba(158%2c 209%2c 216%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1358.326%2c536.922C1378.401%2c536.093%2c1394.341%2c522.316%2c1404.691%2c505.095C1415.438%2c487.213%2c1421.746%2c465.77%2c1412.257%2c447.19C1401.993%2c427.094%2c1380.857%2c413.085%2c1358.326%2c414.316C1337.362%2c415.461%2c1324.032%2c434.285%2c1313.72%2c452.573C1303.658%2c470.419%2c1295.238%2c491.11%2c1304.815%2c509.221C1314.879%2c528.252%2c1336.816%2c537.811%2c1358.326%2c536.922' fill='rgba(158%2c 209%2c 216%2c 1)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1021'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='84.72%25' y1='139.29%25' x2='15.28%25' y2='-39.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1022'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='%2300459e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e')",
    paddingLeft: medium,
    paddingRight:medium,
    display:'flex',
    marginBottom:'-18rem',
    flexDirection:'column',
    // justifyContent:'center',
    // alignItems:'center',
    [queries.m]: {
      paddingLeft:small,
      paddingRight:small,
      marginBottom:'-12rem',
      
      
    },
    [queries.s]: {
      paddingTop: 0,
      marginBottom:'13rem',
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
    paddingBottom:large,
    paddingTop:small,

    marginTop:'-3.5rem',
    // '&::before': {
    //   content: '""',
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   bottom: '3%',
    //   borderRadius:'15px',
    //   width:'100%',
    //   background: `linear-gradient(180deg,
    //     ${color(colors.gray).alpha(0).string()} 0%,
    //     ${color(colors.gray).alpha(0.2).string()} 50%,
    //     ${color(colors.gray).alpha(0.8).string()} 100%)`,
    //   animation: '$ripple 1s linear infinite',
    // },
    [queries.s]: {
      margin:'auto',
      width:'42vh !important',
      display:'contents',
      marginBottom:'-8rem !important',
      

    },
    [queries.m]: {
      margin:'auto',
      width:'25vh',
      display:'contents',
      marginBottom:'1rem',
      

    },
  
    '@global': {
      '*': {
        color: colors.antique,
      },
      img: {
        verticalAlign: 'middle',
        height:'24rem',
        width:'19rem',
        borderRadius:'15px',
        objectFit:'contain',
        [queries.s]: {
          height:'29rem',
          width:'22rem',
          // margin:'3rem 0 3rem 0'
          // '&::before': {
          //   content: '""',
          //   position: 'absolute',
          //   top: 0,
          //   left: 0,
          //   right: 0,
          //   bottom: 0,
          
          //   background: `linear-gradient(0deg,
          //     ${color(colors.gray).alpha(0).string()} 100%,
          //     ${color(colors.gray).alpha(0.2).string()} 50%,
          //     ${color(colors.gray).alpha(0.8).string()} 100%)`,
          //   animation: '$ripple 1s linear infinite',
          // },
        },
    
      },
    },
  },
  content: {
    ...body,
    display: 'flex',
    alignItems: 'flex-end',
    color:'black !important',
    fontWeight:"500",
    top: 0,
    right: 0,
    bottom: 0,
    fontFamily: 'Kanit, sans-serif',
    fonFamily: 'Roboto, sans-serif',
    left: 0,
    // marginLeft: '10rem',
    marginRight: '10rem',
  

    padding: base(2),
    // paddingRight:base(4),
    width:'35rem',
    fontSize:'1.1rem',
    lineHeight:"1.2",
    zIndex: 1,
 
    // background: `linear-gradient(180deg,
    //   ${color(colors.gray).alpha(0).string()} 0%,
    //   ${color(colors.gray).alpha(0.2).string()} 50%,
    //   ${color(colors.gray).alpha(0.8).string()} 100%)`,
    whiteSpace: 'pre-wrap',
    [queries.m]: {
      // left: 0,
      // top: 0,
      // right: 0,
      // bottom: 0,
      // margin:'auto',
      // marginLeft:'3rem',
      // alignItems: 'center',
      // height:'10rem',
      width:'32rem',
      marginRight: '1rem',
      
    },
    [queries.s]: {
      margin:'auto',
      width:'23rem',
      // height:'20rem',
      // marginLeft:'-1rem',
      display:'contents',
      // fontSize:'1.3rem !important',
      // lineHeight:'1.4 !important',
      textAlign:'center',
      // fontWeight:'600',
      // marginTop:'1rem !important',
      // color:'brown !important',
    },
    [queries.xs]: {
      // padding: base(1),
      // fontSize: '13px',
      // lineHeight: base(1),
    },
  },
  heading:{
    ...body,
    display: 'flex',
    alignItems: 'flex-end',
 
    fontWeight:"600",
    top: 0,
    right: 0,
    bottom: 0,
    fontFamily: 'Kanit, sans-serif',
    fonFamily: 'Roboto, sans-serif',
    left: 0,
    marginLeft: '2.5rem',
    textTransform:'uppercase',
    fontSize:'1.8rem',
    marginBottom:'1rem',
    marginTop:'6rem',
    color:`${colors.red} !important`,
    // marginRight: '2rem',
    [queries.s]: {
      marginLeft: '0rem',
      alignItems: 'center',
      marginBottom:'-.5rem',
      marginTop:'5rem',
      textAlign:'center',
    }
  },

  lefthead:{
    ...body,
    display: 'flex',
    // alignItems: 'flex-end',
  
    fontWeight:"600",
    top: 0,
    right: 0,
    bottom: 0,
    fontFamily: 'Kanit, sans-serif',
    fonFamily: 'Roboto, sans-serif',
    left: 0,
    marginLeft: '13rem',
    textTransform:'uppercase',
    fontSize:'1.8rem',
    marginBottom:'0rem',
    marginTop:'8rem',
    color:`${colors.red} !important`,
    // marginRight: '2rem',
    [queries.s]: {
      marginLeft: '2rem',

      marginTop:'5rem',

      textAlign:'center',
    },
    [queries.m]: {
      marginLeft: '9rem',

    }
  },
  leftcontent:{
    ...body,
    display: 'flex',
    alignItems: 'flex-end',
    color:'black !important',
    fontWeight:"500",
    top: 0,
    right: 0,
    bottom: 0,
    fontFamily: 'Kanit, sans-serif',
    fonFamily: 'Roboto, sans-serif',
    left: 0,
    // marginLeft: '10rem',
    marginLeft: '11rem',

    padding: base(2),
    // paddingRight:base(4),
    width:'30rem',
    fontSize:'1.1rem',
    lineHeight:"1.2",
    zIndex: 1,
    [queries.s]: {
      marginLeft: '-1rem',
      marginBottom:'2rem',
      width:'26rem',
    },
    [queries.m]: {
      marginLeft: '7rem',

    }
  },
  rain: {
    verticalAlign: 'middle',
    height:'20rem',
    width:'100%',
    marginBottom:'4rem',
    
  },
  left: {
    display:'flex',
    flexDirection: 'row-reverse',
    // textAlign: 'right',
    justifyContent:'flex-start',
    [queries.s]: {
      flexDirection:"column",
     
      
    },
    
  },
  right: {
    display:'flex',
    flexDirection: 'row',
    // textAlign: 'left',
    [queries.s]: {
      flexDirection:"column",
      
    },
 
  },
  leftside: {
    display:'flex',
    flexDirection: 'row-reverse',
    // textAlign: 'left',
  
  },
  rightside: {
    display:'flex',
    flexDirection: 'row',
    // textAlign: 'left',
    justifyContent:'flex-end',
  },
  circle:{
    height:'25rem',
    width:'25rem',
    top:'3%',
    bottom:0,
    left:'-18%',
    right:'-10%',

background:' linear-gradient(56deg, rgba(255,242,236,0) 0%, rgba(218,110,100,1) 99%, rgba(218,110,100,1) 100%)',
    position:'absolute',
    zIndex:-1,
    borderRadius:'50%',
    '& > *': {
      animationName: '$fade-in-up',
      animationDuration: '800ms',
      animationTimingFunction: 'ease',
      animationFillMode: 'both',
      '&:nth-child(1)': {
        animationDelay: '10ms',
      },
      '&:nth-child(2)': {
        animationDelay: '200ms',
      },
    },
    [queries.m]: {
      height:'28rem',
      width:'28rem',
      
    },

    
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  action: {
    // marginRight: base(2),
  },
  link: {
    textDecoration: 'none',

    '& button': {
      margin: `${base(1.25)} 0`,
      backgroundColor:'gold',
      fontWeight:'500',
      fontSize:'1rem'
    },
  },




});
export const buttonCSS = {
  margin: `${base(3)} 0 0`,
}

