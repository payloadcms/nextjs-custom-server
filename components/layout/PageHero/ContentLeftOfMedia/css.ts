import { createUseStyles } from 'react-jss';
import { base } from '../../../../css/base';
import { medium, small } from '../../../../css/sizes';
import { label } from '../../../../css/type';
import { fadeInUp } from '../css';

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
  },
  media: {
    animationName: '$fade-in-up',
    animationDuration: '800ms',
    animationTimingFunction: 'ease',
    animationFillMode: 'both',
    position: 'absolute',
    animationDelay: '400ms',
    zIndex: -1,
    top: 0,
    right: 0,
    bottom: 0,
    left: '50%',
    '@global': {
      img: objectFit,
      video: objectFit,
    },
  },
});
