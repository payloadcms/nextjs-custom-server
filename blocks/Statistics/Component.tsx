import React from 'react';
import Statistic from '../../components/Statistic';
import useStyles from './css';
import { Type } from '.';
import BackgroundColor from '../../components/layout/BackgroundColor';
import Gutter from '../../components/layout/Gutter';
import Parallax from '../../components/Parallax';

const Statistics: React.FC<Type> = ({
  topOverlap,
  bottomOverlap,
  stats,
  backgroundColor,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.overflow}>
      <div className={[
        classes.wrap,
        classes[`top-overlap-${topOverlap}`],
        classes[`bottom-overlap-${bottomOverlap}`],
      ].filter(Boolean).join(' ')}
      >
        <Gutter
          left
          right
          className={classes.gutter}
        >
          <div className={classes.bgWrap}>
            <BackgroundColor
              color={backgroundColor}
              className={[
                classes.bg,
                classes[`top-bg-${topOverlap}`],
                classes[`bottom-bg-${bottomOverlap}`],
              ].filter(Boolean).join(' ')}
            />
          </div>
        </Gutter>
        <ul className={[
          classes.statistics,
        ].filter(Boolean).join(' ')}
        >
          {stats?.map((stat, i) => (
            <li
              key={i}
              className={classes.stat}
            >
              <Parallax
                className={classes[`stat${i + 1}`]}
                yDistance={50 * (i + 1)}
              >
                <Statistic {...stat} />
              </Parallax>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Statistics;
