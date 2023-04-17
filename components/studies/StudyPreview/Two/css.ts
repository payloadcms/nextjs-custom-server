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
  media: {
    display: 'flex',
    width: '100%',
    marginTop: base(5),
    [queries.m]: {
      marginTop: base(2),
    },
  },
  previewMediaOne: {
    width: '50%',
    paddingRight: base(5),
    [queries.m]: {
      paddingRight: 0,
    },
  },
  previewMediaTwo: {
    width: '50%',
    paddingLeft: base(4),
    marginTop: base(-15),
    [queries.l]: {
      marginTop: base(-10),
    },
    [queries.m]: {
      marginTop: base(-2),
    },
  },
});
