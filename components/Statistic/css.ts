import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import colors from '../../css/colors';
import queries from '../../css/queries';
import transitions from '../../css/transitions';
import { body, h2 } from '../../css/type';

const sizeXXL = base(35);

const sizeXL = base(25);

const sizeM = base(17);

export default createUseStyles({
  statistic: {
    background: colors.gray,
    color: colors.antique,
    borderRadius: sizeXXL,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: sizeXXL,
    height: sizeXXL,
    transition: `opacity ${transitions.slow}ms linear`,
    opacity: 0,
    [queries.xl]: {
      width: sizeXL,
      height: sizeXL,
      borderRadius: sizeXL,
    },
    [queries.m]: {
      width: sizeM,
      height: sizeM,
      borderRadius: sizeM,
    },
  },
  hasRendered: {
    opacity: '1 !important',
  },
  stat: {
    ...h2,
    marginTop: 0,
    [queries.m]: {
      ...h2[queries.m],
      marginBottom: base(0.5),
    },
  },
  description: {
    ...body,
    marginBottom: 0,
  },
});
