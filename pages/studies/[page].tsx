import { GetServerSideProps, GetStaticPaths } from 'next';
import Studies, { getStaticProps as sharedGetStaticProps } from '../studies';

export default Studies;

export const getStaticProps: GetServerSideProps = async (ctx) => {
  const func = sharedGetStaticProps.bind(this);
  return func(ctx);
};

export const getStaticPaths: GetStaticPaths = async () => {
  const studiesReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/studies`);
  const studiesData = await studiesReq.json();

  return {
    paths: Array.from(Array(studiesData.totalPages)).map((page, i) => ({
      params: { page: (i + 1).toString() },
    })),
    fallback: false,
  };
};
