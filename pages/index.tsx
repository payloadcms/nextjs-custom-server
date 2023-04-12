import { GetServerSideProps } from 'next';
import Page, { getStaticProps as sharedGetStaticProps } from './[...slug]';

export default Page;

export const getStaticProps: GetServerSideProps = async (ctx) => {
  const func = sharedGetStaticProps.bind(this);
  return func(ctx);
};
