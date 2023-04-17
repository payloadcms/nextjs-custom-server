import React from 'react';
import BackgroundColor from '../../components/layout/BackgroundColor';
import GridContainer from '../../components/layout/GridContainer';
import Gutter from '../../components/layout/Gutter';
import RichText from '../../components/RichText';
import Link from '../../components/Link';
import Button from '../../components/Button';
import { Type } from '.';
import useStyles from './css';

const CallToAction: React.FC<Type> = ({
  backgroundColor,
  content,
  actions,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.callToAction}>
      <Gutter
        className={classes.bgGutter}
        right
      >
        <BackgroundColor
          color={backgroundColor}
          className={classes.bg}
        />
      </Gutter>
      <GridContainer className={classes.gridContainer}>

        <BackgroundColor color={backgroundColor}>
          <RichText
            content={content}
          />
        </BackgroundColor>
        <ul className={classes.actions}>
          {actions?.map(({ link }, i) => (
            <li
              key={i}
              className={classes.action}
            >
              <Link
                {...link}
                className={classes.link}
              >
                <Button
                  color={backgroundColor}
                  label={link.label}
                />
              </Link>
            </li>
          ))}
        </ul>
      </GridContainer>
    </div>
  );
};

export default CallToAction;
