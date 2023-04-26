import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import { large, small } from '../../css/sizes';
import BackgroundColor from './../../components/layout/BackgroundColor/index';

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
  callToAction: {
    position: 'relative',
    marginTop:'-11rem'
  },
  bgGutter: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  bg: {
    height: '100%',
  },
  gridContainer: {
    paddingTop: small,
    paddingBottom: small,
    position: 'relative',
    zIndex: 2,
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
    marginLeft:'.5rem',
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
});
