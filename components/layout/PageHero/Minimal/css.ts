import { createUseStyles } from 'react-jss';
import { label } from '../../../../css/type';
import { fadeInUp } from '../css';

export default createUseStyles({
  '@keyframes fade-in-up': {
    ...fadeInUp,
  },
  title: {
    ...label,
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
  wrap: {

  },
});
