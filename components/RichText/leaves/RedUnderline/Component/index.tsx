import React, { useState, useEffect, useReducer } from 'react';
import { joinClassNames } from '../../../../../css/joinClassNames';
import useIntersect from '../../../../../hooks/useIntersect';
import useStyles from './css';

const intersectionOptions = {
  rootMargin: '0% 0% -25% 0%',
  threshold: [0, 0.5, 1.0],
};

const initialAnimationState = {
  animatedWordIn: false,
  animateWordOut: false,
};

const reducer = (state, payload) => ({
  ...state,
  ...payload,
});

const RedUnderline: React.FC = ({ children }) => {
  const { redUnderline, animateWordIn, animateWordOut } = useStyles();
  const [intersectionRef, entry] = useIntersect(intersectionOptions);
  const [animationState, dispatch] = useReducer(reducer, initialAnimationState);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      dispatch({
        animateWordIn: false,
        animateWordOut: false,
      });
    }, 800);

    if (entry?.isIntersecting) {
      dispatch({
        animateWordIn: true,
        animateWordOut: false,
      });
      setHasAnimated(true);
      clearTimeout(animationTimeout);
    } else if (hasAnimated) {
      dispatch({
        animateWordOut: true,
        animateWordIn: false,
      });
    }

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [entry, hasAnimated]);

  return (
    <span
      ref={intersectionRef}
      className={joinClassNames([redUnderline, animationState.animateWordIn && animateWordIn, animationState.animateWordOut && animateWordOut])}
    >
      {children}
    </span>
  );
};

export default RedUnderline;
