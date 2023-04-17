import { createUseStyles } from 'react-jss';
import { base } from '../../../css/base';
import colors from '../../../css/colors';
import queries from '../../../css/queries';
import { strokeWidth } from '../../../css/sizes';
import transitions from '../../../css/transitions';
import { largeBody } from '../../../css/type';

export default createUseStyles({
  descriptions: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  hr: {
    margin: `0 0 ${base(2)}`,
    width: base(2),
    height: strokeWidth,
    border: 0,
    transition: `background-color ${transitions.default}ms linear`,
    backgroundColor: colors.gray,
    [queries.m]: {
      display: 'none',
    },
  },
  content: {
    ...largeBody,
    marginBottom: base(15),
    transition: `color ${transitions.default}ms linear`,
    color: colors.gray,
  },
});
