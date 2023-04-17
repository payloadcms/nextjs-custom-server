import React, {
  useReducer,
  useCallback,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { withWindowInfo } from '@faceless-ui/window-info';
import { MouseInfoProvider } from '@faceless-ui/mouse-info';
import useDragScroll from './useDragScroll';
import Slide from './Slide';
import { DragHandle } from './DragHandle';
import { Reducer, SliderContext, Props } from './types';
import useStyles from './css';
import { joinClassNames } from '../../css/joinClassNames';

const Context = createContext<SliderContext>({
  hasPrev: false,
  hasNext: false,
  currentSlide: 0,
  next: () => null,
  prev: () => null,
  dispatch: () => null,
  percentScrolled: 0,
  slides: [],
});

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE': {
      const newState = [...state];
      newState[action.i] = action.slide;
      return newState;
    }

    case 'UPDATE_SIZE': {
      const newState = [...state];
      newState[action.i] = {
        ...state[action.i],
        width: action.width,
        height: action.height,
      };
      return newState;
    }

    default: {
      return state;
    }
  }
};

export const SliderProvider: React.FC = ({ children }) => {
  const [slides, dispatch] = useReducer(reducer, []);
  const [percentScrolled, setPercentScrolled] = useState(0);
  const currentSlide = slides.findIndex((slide) => slide && slide.isIntersecting);
  const containerRef = useDragScroll();

  const hasPrev = Boolean(currentSlide);
  const hasNext = slides.length > currentSlide;

  const next = useCallback(() => {
    if (containerRef.current) {
      const passedSlides = slides.slice(0, currentSlide + 1);
      const scrollPos = passedSlides.reduce((pos, slide) => pos + slide.width, 0);

      containerRef.current.scrollTo({
        top: 0,
        left: scrollPos,
        behavior: 'smooth',
      });
    }
  }, [slides, containerRef, currentSlide]);

  const prev = useCallback(() => {
    if (containerRef.current && currentSlide) {
      const passedSlides = slides.slice(0, currentSlide - 1);
      const scrollPos = passedSlides.reduce((pos, slide) => pos + slide.width, 0);

      containerRef.current.scrollTo({
        top: 0,
        left: scrollPos,
        behavior: 'smooth',
      });
    }
  }, [slides, containerRef, currentSlide]);

  useEffect(() => {
    const container = containerRef?.current;
    let eventListener: EventListener;

    if (container) {
      // Setup a timer
      let timeout: number;

      eventListener = () => {
        // If there's a timer, cancel it
        if (timeout) {
          window.cancelAnimationFrame(timeout);
        }

        // Setup the new requestAnimationFrame()
        timeout = window.requestAnimationFrame(() => {
          // Run our scroll functions
          const scrollPercentage = container.scrollLeft / (container.scrollWidth - container.clientWidth);
          setPercentScrolled(scrollPercentage);
        });
      };

      // Listen for resize events
      container.addEventListener('scroll', eventListener, false);
    }

    return () => {
      if (container) container.removeEventListener('scroll', eventListener);
    };
  }, [containerRef]);

  const value = {
    currentSlide,
    dispatch,
    next,
    prev,
    containerRef,
    hasPrev,
    hasNext,
    percentScrolled,
    slides,
  };

  return (
    <Context.Provider value={value}>
      {typeof children === 'function' && children(value)}
      {typeof children !== 'function' && children}
    </Context.Provider>
  );
};

export const useSlider = (): SliderContext => useContext(Context);

const Slider: React.FC<Props> = ({
  children,
  hideScrollbar = false,
}) => {
  const { dispatch, containerRef, slides } = useSlider();
  const classes = useStyles();
  const [showDragHandle, setShowDragHandle] = useState(false);
  const [enableDragHandle, setEnableDragHandle] = useState(true);
  useEffect(() => {
    setEnableDragHandle(slides.length > 2);
  }, [slides]);

  return (
    <div
      className={joinClassNames([classes.wrap, enableDragHandle && classes.grabCursor])}
      style={hideScrollbar ? {
        height: containerRef?.current?.clientHeight - 1,
      } : {}}
    >
      <div
        ref={containerRef}
        className={classes.slider}
        onMouseMove={() => setShowDragHandle(true)}
        onMouseLeave={() => setShowDragHandle(false)}
      >
        {enableDragHandle && (
          <MouseInfoProvider>
            <DragHandle show={showDragHandle} />
          </MouseInfoProvider>
        )}

        {Array.isArray(children) && children.map((child, i) => (
          <Slide
            containerRef={containerRef}
            key={i}
            i={i}
            dispatch={dispatch}
          >
            {child}
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default withWindowInfo(Slider);
