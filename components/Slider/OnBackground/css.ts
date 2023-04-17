import { createUseStyles } from 'react-jss';
import { base } from '../../../css/base';
import colors from '../../../css/colors';
import queries from '../../../css/queries';
import { large, medium, small, strokeWidth } from '../../../css/sizes';
import { largeBody } from '../../../css/type';

export default createUseStyles({
  sliderOnBackground: {
    overflow: 'hidden',
    position: 'relative',
  },
  gutter: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  bg: {
    height: '100%',
  },
  sliderWrap: {

  },
  slider: {
    paddingTop: large,
    paddingBottom: medium,
    position: 'relative',
    [queries.m]: {
      paddingTop: medium,
      paddingBottom: small,
    },
  },
  trackWrap: {
    marginBottom: large,
    [queries.m]: {
      marginBottom: medium,
    },
  },
  track: {
    position: 'relative',
    height: '1px',
    marginRight: base(11),
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: base(-11),
      bottom: 0,
      left: 0,
      background: colors.antique,
      opacity: 0.5,
    },
    [queries.m]: {
      marginRight: base(3),
      '&:before': {
        right: base(-3),
      },
    },
  },
  indicator: {
    position: 'absolute',
    top: 0,
    bottom: '100%',
    height: strokeWidth,
    width: base(11),
    background: colors.antique,
    [queries.m]: {
      width: base(9),
    },
    [queries.s]: {
      width: base(3),
    },
  },
});
