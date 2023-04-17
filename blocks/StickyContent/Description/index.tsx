import React, { useEffect, useRef } from 'react';
import colors from '../../../css/colors';
import { StickyPosition } from '../Component';
import useStyles from './css';

type Props = {
  content: string
  isInViewport: boolean
  rootPos: StickyPosition
  yScrollPos: number
  i: number
  active: number
  setActive: (active: number) => void
}

const Description: React.FC<Props> = ({
  content,
  rootPos,
  isInViewport,
  setActive,
  yScrollPos,
  i,
  active,
}) => {
  const classes = useStyles({ active: i === active });
  const ref = useRef(null);

  useEffect(() => {
    if (isInViewport && ref) {
      const bounding = ref?.current.getBoundingClientRect();
      const centerPos = bounding.top + (bounding.height / 2);

      if (centerPos > rootPos.top && centerPos < rootPos.bottom) {
        setActive(i);
      }
    }
  }, [
    ref,
    i,
    isInViewport,
    rootPos,
    setActive,
    yScrollPos,
  ]);

  return (
    <div
      ref={ref}
    >
      <hr
        className={classes.hr}
        style={{ backgroundColor: i === active ? colors.antique : undefined }}
      />
      <p
        className={classes.content}
        style={{ color: i === active ? colors.antique : undefined }}
      >
        {content}
      </p>
    </div>
  );
};

export default Description;
