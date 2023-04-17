import { createUseStyles } from 'react-jss';
import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import queries from '../../../../css/queries';

export default createUseStyles({
  title: {
    color: colors.gray,
    textDecoration: 'none',
  },
  link: {
    textDecoration: 'none',
  },
  previewMediaOne: {
    marginLeft: base(-10),
    position: 'relative',
    left: base(-5),
    marginTop: base(10),
    [queries.l]: {
      position: 'static',
      left: 'auto',
      marginTop: base(3),
      marginLeft: 0,
    },
  },
  previewMediaTwo: {
    marginRight: base(-6),
    [queries.l]: {
      marginRight: 0,
    },
  },
});
