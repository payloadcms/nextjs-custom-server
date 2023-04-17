import React from 'react';
import { Modal, useModal } from '@faceless-ui/modal';
import NextLink from 'next/link';
import { Props } from './types';
import useStyles from './css';
import Icon from '../../graphics/Icon';
import Hamburger from './Hamburger';
import GridContainer from '../GridContainer';
import { Grid, Cell } from '@faceless-ui/css-grid';
import Link from '../../Link';
import LetsTalk from '../../LetsTalk';
import LargeBody from './../../type/LargeBody/index';

const menuSlug = 'menu';

const Header: React.FC<Props> = ({ megaMenu, socialMedia }) => {
  const { isModalOpen, toggleModal } = useModal();
  const menuActive = isModalOpen(menuSlug);
  const classes = useStyles({ menuActive });
  return (
    <header className={classes.header}>
      <NextLink
        href="/"
        scroll={false}
        className={classes.logo}
      >
          <Icon className={classes.icon} />

      </NextLink>
      <button
        type="button"
        className={classes.menuButton}
        onClick={() => toggleModal(menuSlug)}
      >
        <Hamburger active={menuActive} />
      </button>
      <Modal
        slug={menuSlug}
        className={classes.menu}
      >
        <GridContainer>
          <Grid className={classes.navLinks}>
            <Cell
              cols={7}
              htmlElement="nav"
            >
              {megaMenu?.nav?.map(({ link }, i) => (
                <Link
                  {...link}
                  key={i}
                  className={classes.primaryNavItem}
                >
                  <h3
                    key={i}
                    style={{ marginTop: i === 1 ? 0 : undefined }}
                  >
                    {link.label}
                  </h3>
                </Link>
              ))}
            </Cell>
            <Cell
              cols={3}
            >
              {socialMedia?.links?.map(({ url, label }) => (
                <LargeBody key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.secondaryNavItem}
                  >
                    {label}
                  </a>
                </LargeBody>
              ))}
            </Cell>
          </Grid>
        </GridContainer>
        <div className={classes.ctaWrap}>
          <LetsTalk className={classes.ctaCSS} />
        </div>
      </Modal>
    </header>
  );
};

export default Header;