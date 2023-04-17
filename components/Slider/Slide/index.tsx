import React, { useEffect, useRef } from 'react';
import useResize from '../../../hooks/useResize';
import { Props } from './types';
import useStyles from './css';

const Slide: React.FC<Props> = ({ children, dispatch, i, containerRef }) => {
  const ref = useRef<HTMLDivElement>(null);
  const classes = useStyles();
  const [resizeRef, resizeEntry] = useResize();

  const {
    contentRect: {
      width = 0,
      height = 0,
    } = {},
  } = resizeEntry || {};

  useEffect(() => {
    let observer: IntersectionObserver;
    const refCopy = ref?.current;

    if (refCopy && containerRef?.current) {
      const { offsetWidth, offsetHeight } = refCopy;

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          dispatch({
            type: 'UPDATE',
            i,
            slide: {
              isIntersecting: entry.isIntersecting,
              width: offsetWidth,
              height: offsetHeight,
            },
          });
        });
      }, {
        root: containerRef.current,
        rootMargin: '0px',
        threshold: 0.5,
      });

      observer.observe(refCopy);
    }

    return () => {
      if (refCopy) observer.unobserve(refCopy);
    };
  }, [ref, dispatch, containerRef, i]);

  useEffect(() => {
    dispatch({
      type: 'UPDATE_SIZE',
      i,
      width,
      height,
    });
  }, [width, height, dispatch, i]);

  return (
    <div
      className={classes.slide}
      ref={ref}
    >
      <div ref={resizeRef}>
        {children}
      </div>
    </div>
  );
};

export default Slide;
