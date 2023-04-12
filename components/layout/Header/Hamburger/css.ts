import { createUseStyles } from 'react-jss';
import { base } from '../../../../css/base';
import colors from '../../../../css/colors';

const generateLineStyles = (styles) => ({
  transition: 'all 400ms',
  transformOrigin: 'center',
  stroke: colors.antique,
  strokeWidth: '2px',
  vectorEffect: 'non-scaling-stroke',
  ...styles,
});

export default createUseStyles({
  hamburger: {
    overflow: 'visible',
    width: base(),
    height: base(),
  },
  line1: ({ active }) => generateLineStyles({
    opacity: active ? 0 : undefined,
    transform: active ? `translate(0, ${base(-0.5)})` : undefined,
  }),
  line2: ({ active }) => generateLineStyles({
    opacity: 1,
    transform: active ? 'rotate(45deg)' : undefined,
  }),
  line3: ({ active }) => generateLineStyles({
    opacity: active ? 1 : 0,
    transform: active ? 'rotate(-45deg)' : undefined,
  }),
  line4: ({ active }) => generateLineStyles({
    opacity: active ? 0 : undefined,
    transform: active ? `translate(0, ${base(0.5)})` : undefined,
  }),
});
