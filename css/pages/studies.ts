import { createUseStyles } from 'react-jss';
import { headerHeight } from '../sizes';
import { label } from '../type';

export default createUseStyles({
  studies: {
    height: '100%',
    paddingTop: headerHeight,
  },
  title: {
    ...label,
  },
});
