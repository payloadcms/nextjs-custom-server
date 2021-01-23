import React from 'react';
import { GetServerSideProps } from 'next';

type Props = {
  statusCode: number
}

const Error: React.FC<Props> = ({ statusCode }) => (
  <p>
    {statusCode
      ? `An error ${statusCode} occurred on server`
      : 'An error occurred on client'}
  </p>
);

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  let statusCode = 500;
  if (res?.statusCode) statusCode = res.statusCode;

  return {
    props: {
      statusCode,
    },
  };
};

export default Error;
