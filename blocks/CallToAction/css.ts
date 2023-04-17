import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import { large } from '../../css/sizes';

export default createUseStyles({
  callToAction: {
    position: 'relative',
  },
  bgGutter: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  bg: {
    height: '100%',
  },
  gridContainer: {
    paddingTop: large,
    paddingBottom: large,
    position: 'relative',
    zIndex: 2,
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  action: {
    marginRight: base(2),
  },
  link: {
    textDecoration: 'none',

    '& button': {
      margin: `${base(1.25)} 0`,
    },
  },
});
