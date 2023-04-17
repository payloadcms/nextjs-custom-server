import React from 'react';
import useStyles from './css';
import Statistic from '../../components/Statistic';
import { Type } from '.';
import Parallax from '../../components/Parallax';
import Media from '../../components/Media';

const MediaStatCollage: React.FC<Type> = ({
  topOverlap,
  bottomOverlap,
  stats,
  media,
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
        <div className={classes.row1}>
          {stats?.[0]?.stat && (
            <Parallax
              yDistance={100}
              className={classes.stat1}
            >
              <Statistic
                {...stats[0]}
              />
            </Parallax>
          )}
          {stats?.[1]?.stat && (
            <Parallax
              yDistance={150}
              className={classes.stat2}
            >
              <Statistic
                {...stats[1]}
              />
            </Parallax>
          )}
        </div>
        <div className={classes.row2}>
          {media?.[0]?.media && (
            <Parallax
              yDistance={50}
              className={classes.media1}
            >
              <Media
                preferredSize="square"
                {...media[0].media}
              />
            </Parallax>
          )}
          {media?.[1]?.media && (
            <Media
              className={classes.media2}
              preferredSize="square"
              {...media[1].media}
            />
          )}
        </div>
        <div className={classes.row3}>
          {media?.[2]?.media && (
            <Parallax
              yDistance={100}
              className={classes.media3}
            >
              <Media
                {...media[2].media}
                preferredSize="square"
              />
            </Parallax>
          )}
          {stats?.[2]?.stat && (
            <Parallax
              yDistance={175}
              className={classes.stat3}
            >
              <Statistic
                {...stats[2]}
              />
            </Parallax>
          )}
          {media?.[3]?.media && (
            <Parallax
              yDistance={150}
              className={classes.media4}
            >
              <Media
                {...media[3].media}
                preferredSize="portrait"
              />
            </Parallax>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaStatCollage;
