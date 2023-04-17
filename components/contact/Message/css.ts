import { createUseStyles } from 'react-jss';
import { base } from '../../../css/base';
import { body, fontFamily } from '../../../css/type';

export default createUseStyles({
  messageField: {
    border: 0,
    background: 'transparent',
    resize: 'none',
    width: '100%',
    fontFamily,
    maxHeight: base(30),
    ...body,
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
});
