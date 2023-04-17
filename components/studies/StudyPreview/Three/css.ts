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
  },
  previewMediaOne: {
    paddingRight: `calc(${base(7)} + 50%)`,
    marginBottom: base(5),
    [queries.l]: {
      paddingLeft: base(2),
      paddingRight: '50%',
    },
    [queries.s]: {
      display: 'none',
    },
  },
  previewMediaTwo: {
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
  previewMediaThree: {
    marginRight: base(-6),
    [queries.l]: {
      marginRight: 0,
    },
  },
});
