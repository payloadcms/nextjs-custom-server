import { CSSProperties } from 'react';

function mergeStyles(...styles: CSSProperties[]): CSSProperties {
  return Object.assign({}, ...styles);
}

export default mergeStyles;
