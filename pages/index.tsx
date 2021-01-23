import { GetServerSideProps } from 'next';
import React from 'react';
import NotFound from '../components/NotFound';
import { Props, getServerSideProps as sharedGetServerSideProps } from './[...slug]';

const HomePage: React.FC<Props> = (props) => {
  const { page } = props;

  if (!page) {
    return <NotFound />;
  }

  return (
    <h1>{page.title}</h1>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const func = sharedGetServerSideProps.bind(this);
  return func(ctx);
};
