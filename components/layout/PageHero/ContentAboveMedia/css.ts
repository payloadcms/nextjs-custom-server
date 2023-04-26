import { createUseStyles } from 'react-jss';
import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { medium } from '../../../../css/sizes';
import { fadeInUp } from '../css';
import colors from '../../../../css/colors';

export default createUseStyles({
  '@keyframes fade-in-up': {
    ...fadeInUp,
  },
  wrap: {
    marginBottom: medium,
    backgroundColor:colors.red,
  },
  afterLoad: {},
  richText: {
    '& > *': {
      animationName: '$fade-in-up',
      animationDuration: '800ms',
      animationTimingFunction: 'ease',
      animationFillMode: 'both',
      position:'relative',
      zIndex:1,
      color:colors.yellow,
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
    zIndex: 0,
    marginTop: base(-4.25),
    animationName: '$fade-in-up',
    animationDuration: '800ms',
    animationTimingFunction: 'ease',
    animationFillMode: 'both',
    animationDelay: '300ms',
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

    [queries.m]: {
      marginTop: base(-3.5),
    },
  },
});
