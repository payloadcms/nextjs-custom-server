import { base, htmlFontSize } from './base';
import queries from './queries';

const heading = {
  fontWeight: 'normal',
};

export const h1 = {
  ...heading,
  fontSize: base(5),
  lineHeight: base(5),
  margin: `0 0 ${base(2)}`,
};

export const h2 = {
  ...heading,
  fontSize: base(4.25),
  lineHeight: base(5),
  margin: `${base(2)} 0`,
};

export const h3 = {
  ...heading,
  fontSize: base(3.5),
  lineHeight: base(4),
  margin: `${base(2)} 0 ${base(1.5)}`,
};

export const h4 = {
  ...heading,
  fontSize: base(2.25),
  lineHeight: base(2.5),
  margin: `${base(1.5)} 0 ${base()}`,
};

export const h5 = {
  ...heading,
  fontSize: base(1.625),
  lineHeight: base(2.25),
  margin: `${base(1)} 0 ${base(0.5)}`,
};

export const body = {
  fontSize: htmlFontSize,
  lineHeight: base(1.5),
};

export const largeBody = {
  fontSize: 22,
  lineHeight: base(2.25),
  margin: `${base(0.5)} 0`,
  [queries.m]: {
    lineHeight: base(1.86),
  },
};
