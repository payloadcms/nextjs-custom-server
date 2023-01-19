/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Type } from '.';
import RichText from '../../components/RichText';
import classes from './index.module.css';

export const Component: React.FC<Type> = (props) => {
  const { content, buttons } = props;

  return (
    <div className={classes.cta}>
      <div className={classes.wrap}>
        <RichText
          content={content}
          className={classes.content}
        />
        {buttons && (
          <ul className={classes.buttons}>
            {buttons.map((button, i) => (
              <li key={i}>
                {button.type === 'page' && (
                  <Link
                    href="[...slug]"
                    as={`/${button.page.slug}`}
                    className={classes.button}
                  >
                    {button.label}
                  </Link>
                )}
                {button.type === 'custom' && (
                  <a
                    className={classes.button}
                    href={button.url}
                    target={button.newTab ? '_blank' : undefined}
                    rel="noopener noreferrer"
                  >
                    {button.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
