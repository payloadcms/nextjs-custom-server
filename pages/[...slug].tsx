import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Type as PageType } from '../collections/Page';
import NotFound from '../components/NotFound';
import Head from '../components/Head';
import RenderBlocks from '../components/RenderBlocks';
import GridContainer from '../components/layout/GridContainer';
import Template from '../components/layout/Template';
import { Type as FooterType } from '../globals/Footer';
import { Type as SocialMediaType } from '../globals/SocialMedia';

export type Props = {
  page?: PageType
  statusCode: number
  footer: FooterType
  socialMedia: SocialMediaType
}

const Page: React.FC<Props> = (props) => {
  const { page, footer, socialMedia } = props;

  if (!page) {
    return <NotFound />;
  }

  return (
    <Template
      footer={footer}
      socialMedia={socialMedia}
    >
      <Head
        title={page.meta?.title || page.title}
        description={page.meta?.description}
        keywords={page.meta?.keywords}
      />
      <header>
        <h1>{page.title}</h1>
      </header>
      <RenderBlocks layout={page.layout} />
      <GridContainer>
        <Grid>
          <Cell
            cols={6}
            colsM={8}
          >
            Here is some first-column content
          </Cell>
          <Cell
            cols={6}
            colsM={8}
          >
            Here is some content
          </Cell>
        </Grid>
      </GridContainer>
    </Template>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug || 'home';

  const pageReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=${slug}`);
  const pageData = await pageReq.json();

  return {
    props: {
      page: pageData.docs[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pageReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?limit=100`);
  const pageData = await pageReq.json();

  return {
    paths: pageData.docs.map(({ slug }) => ({
      params: { slug: slug.split('/') },
    })),
    fallback: false,
  };
};
