import { base } from './base';
import queries from './queries';

export const fontFamily = 'sans-serif';

const heading = {
  fontWeight: 'normal',
};

export const h1 = {
  ...heading,
  fontSize: 100,
  lineHeight: base(5),
  margin: `0 0 ${base(2)}`,
  [queries.l]: {
    fontSize: 90,
    lineHeight: base(4.25),
  },
  [queries.m]: {
    fontSize: 48,
    lineHeight: base(3.74),
  },
};

export const h2 = {
  ...heading,
  fontSize: 94,
  lineHeight: base(5),
  margin: `${base(2)} 0`,
  [queries.l]: {
    fontSize: 70,
    lineHeight: base(3.75),
  },
  [queries.m]: {
    fontSize: 40,
    lineHeight: base(3.05),
  },
};

export const h3 = {
  ...heading,
  fontSize: 70,
  lineHeight: base(4),
  margin: `${base(2)} 0 ${base(1.5)}`,
  [queries.l]: {
    fontSize: 55,
    lineHeight: base(3.33),
  },
  [queries.m]: {
    fontSize: 36,
    lineHeight: base(2.66),
  },
};

export const h4 = {
  ...heading,
  fontSize: 45,
  lineHeight: base(2.65),
  margin: `${base(1.5)} 0 ${base()}`,
  [queries.m]: {
    fontSize: 32,
    lineHeight: base(2.67),
  },
};

export const h5 = {
  ...heading,
  fontSize: 32,
  lineHeight: base(2.25),
  margin: `${base(1)} 0 ${base(0.5)}`,
  [queries.m]: {
    fontSize: 24,
    lineHeight: base(2.4),
  },
};

export const body = {
  fontSize: 18,
  lineHeight: base(1.5),
  [queries.m]: {
    lineHeight: base(1.87),
    letterSpacing: '.5px',
  },
};

export const largeBody = {
  fontSize: 22,
  lineHeight: base(2.25),
  margin: `${base(0.5)} 0`,
  [queries.m]: {
    lineHeight: base(1.86),
  },
};

export const label = {
  fontSize: 15,
  lineHeight: base(2.4),
  letterSpacing: '2.5px',
  textTransform: 'uppercase',
};
