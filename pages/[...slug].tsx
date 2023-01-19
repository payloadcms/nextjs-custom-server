import React, { useCallback } from 'react';
import payload from 'payload';
import { GetServerSideProps } from 'next';
import { PayloadAdminBar, PayloadAdminBarProps } from 'payload-admin-bar';
import { useRouter } from 'next/router';
import { Type as PageType } from '../collections/Page';
import NotFound from '../components/NotFound';
import Head from '../components/Head';
import classes from '../css/page.module.css';
import RenderBlocks from '../components/RenderBlocks';

export type Props = {
  page?: PageType
  statusCode: number
  pageID?: string
}

const appURL = process.env.NEXT_PUBLIC_SERVER_URL;

const Page: React.FC<Props & PayloadAdminBarProps> = (props) => {
  const { page, preview } = props;
  const router = useRouter();

  const onPreviewExit = useCallback(() => {
    const exit = async () => {
      const exitReq = await fetch('/api/exit-preview');
      if (exitReq.status === 200) {
        router.reload();
      }
    };
    exit();
  }, [router]);

  if (!page) {
    return <NotFound />;
  }

  return (
    <main>
      <Head
        title={page.meta?.title || page.title}
        description={page.meta?.description}
        keywords={page.meta?.keywords}
      />
      <PayloadAdminBar
        id={page?.id}
        cmsURL={appURL}
        collection="pages"
        onPreviewExit={onPreviewExit}
        preview={preview}
        logo={(
          <img
            src="/payload.svg"
            alt="Payload Logo"
            width="20px"
            height="20px"
          />
        )}
        style={{
          position: 'relative',
          padding: '10px 5%',
        }}
      />
      <div className={classes.page}>
        <header className={classes.header}>
          <h1>{page.title}</h1>
        </header>
        <div className={classes.featuredImage}>
          {page.image && (
            <img
              src={`${appURL}/media/${page.image.sizes?.feature?.filename || page.image.filename}`}
              alt={page.image.alt}
            />
          )}
        </div>
        <RenderBlocks layout={page.layout} />
        <footer className={classes.footer}>
          <hr />
          NextJS + Payload Server Boilerplate made by
          {' '}
          <a
            href="https://payloadcms.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Payload
          </a>
        </footer>
      </div>
    </main>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug ? (ctx.params.slug as string[]).join('/') : 'home';
  const { preview } = ctx;

  const pageQuery = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!pageQuery.docs[0]) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      page: pageQuery.docs[0],
      preview: preview || false,
    },
  };
};
