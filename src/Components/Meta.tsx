import { NextSeo } from 'next-seo';
import Head from 'next/head';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
	image?: string;
};

const Meta = (props: IMetaProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
				{/* Try to work around issue with twitter in NextSEO */}
				{props.image && <meta name="og:image" content={props.image} />}
				{props.image && <meta name="twitter:image" content={props.image} />}
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          site_name: 'In Tech Years',
					images: props.image ? [{
						url: props.image
					}] : undefined
        }}
      />
    </>
  );
};

export { Meta };
