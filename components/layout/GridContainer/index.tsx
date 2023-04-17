import React, { createContext, useEffect, useRef, useState, useContext } from 'react';
import { useWindowInfo } from '@faceless-ui/window-info';
import useStyles from './css';

const GridContainer: React.FC<{ className?: string }> = ({ children, className }) => {
  const classes = useStyles();
  return (
    <div className={[classes.gridContainer, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
};

const Context = createContext<number>(0);

export const GridContainerWidthProvider: React.FC = ({ children }) => {
  const { width: windowWidth } = useWindowInfo();
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(ref?.current?.offsetWidth);
  }, [windowWidth, ref]);

  return (
    <Context.Provider value={width}>
      {children}
      <GridContainer>
        <div ref={ref} />
      </GridContainer>
    </Context.Provider>
  );
};

export const useGridContainerWidth = (): number => useContext(Context);

export default GridContainer;