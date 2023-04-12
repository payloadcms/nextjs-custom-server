import { createUseStyles } from 'react-jss';
import colors from '../../../css/colors';

export default createUseStyles({
  path: ({ color }) => ({
    stroke: colors[color],
  }),
});
