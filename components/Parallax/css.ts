import { createUseStyles } from 'react-jss';
import queries from '../../css/queries';

export default createUseStyles({
  parallax: {
    transition: 'transform 400ms cubic-bezier(0, 0, 0.2, 1) 0s',
    [queries.xs]: {
      transition: 'transform 800ms cubic-bezier(0, 0, 0.2, 1) 0s',
    },
  },
});
