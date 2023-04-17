import { createUseStyles } from 'react-jss';
import { htmlFontSize, baselinePX, base } from './base';
import colors from './colors';
import { h1, h2, h3, h4, h5, body, fontFamily } from './type';
import queries from './queries';
import transitions from './transitions';

export default createUseStyles({
  // @ts-ignore
  '@font-face': [
    {
      fontFamily: 'Lausanne',
      src: 'url(/fonts/Lausanne-300.woff)',
      fallbacks: [
        'url(/fonts/Lausanne-300.ttf) format(truetype)',
        'url(/fonts/Lausanne-300.svg) format(svg)',
      ],
      fontWeight: 300,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Lausanne',
      src: 'url(/fonts/Lausanne-300italic.woff)',
      fallbacks: [
        'url(/fonts/Lausanne-300italic.ttf) format(truetype)',
        'url(/fonts/Lausanne-300italic.svg) format(svg)',
      ],
      fontWeight: 300,
      fontStyle: 'italic',
    },
  ],
  '@global': {
    'html, body': {
      margin: 0,
      '-webkit-font-smoothing': 'antialiased',
      color: colors.gray,
      height: '100%',
    },
    '*': {
      boxSizing: 'border-box',
    },
    '::selection': {
      background: colors.red,
      color: colors.white,
      mixBlendMode: 'normal',
    },
    html: {
      fontFamily,
      fontSize: htmlFontSize,
      lineHeight: `${baselinePX}px`,
      backgroundColor: colors.antique,
      [queries.m]: {
        fontSize: htmlFontSize * 0.75,
      },
    },
    '#__next': {
      height: '100%',
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
    '.page-transitions': {
      transition: `opacity ${transitions.page}ms linear`,
    },
    '.page-transitions-enter': {
      opacity: 0,
    },
    '.page-transitions-enter-active': {
      opacity: 1,
    },
    '.page-transitions-enter-done': {
      opacity: 1,
    },
    '.page-transitions-exit': {
      opacity: 1,
    },
    '.page-transitions-exit-active': {
      opacity: 0,
    },
    '.page-transitions-exit-done': {
      opacity: 0,
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
    '.Toastify .Toastify__toast-container': {
      left: base(2),
      right: base(2),
      transform: 'none',
      width: 'auto',
    },
    '.Toastify .Toastify__toast': {
      padding: base(0.5),
      borderRadius: 0,
      fontWeight: 'normal',
    },
    '.Toastify .Toastify__close-button': {
      alignSelf: 'center',
    },
    '.Toastify .Toastify__toast--success': {
      color: colors.gray,
      background: colors.blue,
    },
    '.Toastify .Toastify__close-button--success': {
      alignSelf: 'center',
    },
    '.Toastify .Toastify__toast--error': {
      color: colors.antique,
      background: colors.red,
    },
  },
  app: {
    height: '100%',
  },
});