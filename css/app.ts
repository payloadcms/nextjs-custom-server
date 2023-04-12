import { createUseStyles } from 'react-jss';
import { htmlFontSize, baselinePX, base } from './base';
import colors from './colors';
import { h1, h2, h3, h4, h5, body } from './type';
import queries from './queries';
import transitions from './transitions';

export default createUseStyles({
  '@global': {
    'html, body': {
      margin: 0,
      color: colors.gray,
    },
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      fontFamily: 'system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize: htmlFontSize,
      lineHeight: `${baselinePX}px`,
      backgroundColor: colors.antique,
      [queries.m]: {
        fontSize: htmlFontSize * 0.75,
      },
    },
    h1,
    h2,
    h3,
    h4,
    h5,
    p: {
      ...body,
    },
    ol: {
      padding: `0 0 0 ${base()}`,
      margin: `0 0 ${base()} 0`,
    },
    ul: {
      padding: `0 0 0 ${base()}`,
      margin: `0 0 ${base()} 0`,
    },
    li: {
      ...body,
    },
    '.payload__modal-item': {
      opacity: 0,
      transition: `opacity ${transitions.modal}ms linear`,
    },
    '.payload__modal-item--enterActive': {
      opacity: 1,
    },
    '.payload__modal-item--enterDone': {
      opacity: 1,
    },
  },
  app: {
    height: '100%',
  },
});
