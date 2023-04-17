import React from 'react';
import { Cell, Grid } from '@faceless-ui/css-grid';
import { Type } from '.';
import Link from '../../components/Link';
import Arrow from '../../components/graphics/Arrow';

import useStyles from './css';
import GridContainer from '../../components/layout/GridContainer';
import Gutter from '../../components/layout/Gutter';
import BackgroundColor from '../../components/layout/BackgroundColor';

const CTAGrid: React.FC<Type> = ({
  actions,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.CTAGrid}>
      <ul>
        {actions?.map(({ headline, link, icon }, i) => (
          <li
            key={i}
            className={classes.actionWrap}
          >
            <Link
              {...link}
              className={classes.link}
            >
              <GridContainer className={classes.gridContainer}>
                <Grid>
                  <Cell cols={12}>
                    <div className={classes.action}>
                      <p className={classes.headline}>
                        {headline}
                      </p>

                      <p className={classes.linkText}>
                        {link.label}
                        {icon === 'arrow' && <Arrow className={classes.arrow} />}
                      </p>
                    </div>

                    {i + 1 !== actions?.length && (
                      <div className={classes.separator} />
                    )}
                  </Cell>
                </Grid>
              </GridContainer>

              <Gutter
                className={classes.gutter}
                left
              >
                <BackgroundColor
                  color="gray"
                  className={classes.bg}
                />
              </Gutter>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CTAGrid;
