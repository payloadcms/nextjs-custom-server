import { createUseStyles } from 'react-jss';
import { base } from '../../../css/base';
import { gridContainerWidth } from '../../../css/structure';

export default createUseStyles({
  gridContainer: {
    maxWidth: gridContainerWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: base(2),
    paddingRight: base(2),
  },
});
