import { Cell, Grid } from '@faceless-ui/css-grid';
import React, { useEffect, useRef, useState } from 'react';
import { useScrollInfo } from '@faceless-ui/scroll-info';
import { Type } from '.';
import BackgroundColor from '../../components/layout/BackgroundColor';
import GridContainer from '../../components/layout/GridContainer';
import Gutter from '../../components/layout/Gutter';
import Description from './Description';

import useStyles, { labelHeight } from './css';
import useIntersect from '../../hooks/useIntersect';

export type StickyPosition = {
  top: number
  bottom: number
}

const StickyContent: React.FC<Type> = ({ sections }) => {
  const { y: yScrollPos } = useScrollInfo();
  const [intersectionRef, entry] = useIntersect({});
  const classes = useStyles();
  const stickyRef = useRef(null);

  const [active, setActive] = useState(0);
  const [pos, setPos] = useState<StickyPosition>({ top: 0, bottom: 0 });

  const isInViewport = Boolean(entry?.isIntersecting);

  useEffect(() => {
    if (isInViewport && stickyRef?.current) {
      const bounding = stickyRef.current.getBoundingClientRect();

      setPos({
        top: bounding.top,
        bottom: bounding.bottom,
      });
    }
  }, [yScrollPos, isInViewport, stickyRef]);

  return (
    <div
      className={classes.wrap}
      ref={intersectionRef}
    >
      <div
        className={classes.sticky}
        ref={stickyRef}
      >
        <Gutter
          left
          className={classes.bgGutter}
        >
          <BackgroundColor
            color="red"
            className={classes.bg}
          />
        </Gutter>
        <GridContainer className={classes.stickyGrid}>
          <Grid>
            <Cell
              cols={6}
              colsM={3}
              htmlElement="ul"
              className={classes.labels}
              style={{
                transform: `translate3d(0, calc(${labelHeight} * ${active} * -1) ,0)`,
              }}
            >
              {sections?.map((section, i) => (
                <li
                  key={i}
                  className={[
                    classes.label,
                    i === active && classes.activeLabel,
                  ].filter(Boolean).join(' ')}
                >
                  {section.label}
                </li>
              ))}
            </Cell>
          </Grid>
        </GridContainer>
        <Gutter
          left
          className={classes.gradientGutter}
        >
          <div
            className={classes.gradient}
          />
        </Gutter>
      </div>
      <GridContainer className={classes.descriptionWrap}>
        <Grid>
          <Cell
            htmlElement="ul"
            start={7}
            startM={4}
            cols={5}
            colsM={5}
            className={classes.descriptions}
          >
            {sections?.map((section, i) => (
              <li key={i}>
                <Description
                  i={i}
                  active={active}
                  rootPos={pos}
                  isInViewport={isInViewport}
                  yScrollPos={yScrollPos}
                  content={section.description}
                  setActive={setActive}
                />
              </li>
            ))}
          </Cell>
        </Grid>
      </GridContainer>
    </div>
  );
};

export default StickyContent;
