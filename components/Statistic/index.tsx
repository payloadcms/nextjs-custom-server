import React, { useEffect, useState } from 'react';
import useStyles from './css';
import { Type as StatType } from '../../fields/stat';
import useIntersect from '../../hooks/useIntersect';

type Props = StatType & {
  className?: string
}

const intersectionOptions = {
  threshold: 0.2,
};

const Statistic: React.FC<Props> = ({ stat, description, className }) => {
  const classes = useStyles();
  const [intersectionRef, entry] = useIntersect(intersectionOptions);
  const [hasRendered, setHasRendered] = useState(false);

  const isIntersecting = Boolean(entry?.isIntersecting);
  const isAboveViewport = entry?.boundingClientRect?.top < 0;

  const shouldRender = isIntersecting || isAboveViewport;

  useEffect(() => {
    if (shouldRender && !hasRendered) {
      setHasRendered(true);
    }
  }, [shouldRender, hasRendered]);

  return (
    <div
      ref={intersectionRef}
      className={[
        classes.statistic,
        hasRendered && classes.hasRendered,
        className,
      ].filter(Boolean).join(' ')}
    >
      <div className={classes.stat}>
        {stat}
      </div>
      <div>
        {description}
      </div>
    </div>
  );
};

export default Statistic;
