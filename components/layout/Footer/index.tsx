import React, { useCallback } from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import GridContainer from '../GridContainer';
import Gutter from '../Gutter';
import { Type as FooterType } from '../../../globals/Footer';
import { Type as SocialMediaType } from '../../../globals/SocialMedia';
import Link from '../../Link';
import LetsTalk from '../../LetsTalk';
import useStyles from './css';
import Arrow from '../../graphics/Arrow';

type Props = {
  footer: FooterType
  socialMedia: SocialMediaType
}

const Footer: React.FC<Props> = ({ footer, socialMedia }) => {
  const classes = useStyles();

  const backToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer className={classes.footer}>
      <Gutter
        right
        className={classes.bgWrap}
      >
        <div className={classes.bg} />
      </Gutter>
      <GridContainer className={classes.wrap}>
        <Grid>
          {(Array.isArray(footer?.nav) && footer.nav.length) > 0 && (
            <Cell
              cols={6}
              colsM={8}
              htmlElement="ul"
              className={classes.nav}
            >
              {footer.nav.map(({ link }) => (
                <li key={link.label}>
                  <Link
                    {...link}
                    className={classes.link}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </Cell>
          )}
          <Cell
            cols={6}
            colsM={8}
          >
            <div className={classes.section}>
              <p style={{ margin: 0 }}>
                <a
                  href="mailto:info@customwebsiteseries.com"
                  className={classes.link}
                >
                  info@customwebsiteseries.com
                </a>
              </p>
            </div>
            <div className={classes.section}>
              <p style={{ margin: 0 }}>
                <a
                  className={classes.link}
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  123 Address Goes Here,
                  <br />
                  Grand Rapids, MI 49504
                </a>
              </p>
            </div>
            <div className={classes.section}>
              <p style={{ margin: 0 }}>
                <a
                  className={classes.link}
                  href="tel:616123456"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  616-123-4567
                </a>
              </p>
            </div>
            <ul className={classes.social}>
              {socialMedia?.links?.map(({ url, label }) => (
                <li key={label}>
                  <a
                    className={classes.link}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className={classes.copyright}>
              &copy;
              {' '}
              {new Date().getFullYear()}
              {' '}
              Custom Website Series
            </p>
          </Cell>
        </Grid>
        <div className={classes.ctaWrap}>
          <LetsTalk className={classes.ctaCSS} />
        </div>
      </GridContainer>
      <button
        type="button"
        onClick={backToTop}
        className={classes.backToTop}
      >
        <Arrow className={classes.backToTopArrow} />
      </button>
    </footer>
  );
};

export default Footer;
