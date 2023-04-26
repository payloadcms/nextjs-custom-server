import { createUseStyles } from 'react-jss';
import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { medium } from '../../../../css/sizes';
import { fadeInUp } from '../css';

export default createUseStyles({
  '@keyframes fade-in-up': {
    ...fadeInUp,
  },
  wrap: {
    marginBottom: medium,
  },
  afterLoad: {},
  richText: {
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
  },
  media: {
    position: 'relative',
    zIndex: -1,
    marginTop: base(-4.25),
    animationName: '$fade-in-up',
    animationDuration: '800ms',
    animationTimingFunction: 'ease',
    animationFillMode: 'both',
    animationDelay: '300ms',

    [queries.m]: {
      marginTop: base(-3.5),
    },
  },
});
