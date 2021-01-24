import { GetServerSideProps } from 'next';
import Page, { getServerSideProps as sharedGetServerSideProps } from './[...slug]';

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const func = sharedGetServerSideProps.bind(this);
  return func(ctx);
};
