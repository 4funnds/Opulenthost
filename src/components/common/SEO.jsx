import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, image, url, type = 'website' }) => {
  const siteName = 'Opulent Host - Premium Web Development & Design Solutions';
  const defaultDescription = 'Transform your online presence with our custom web development services. Specializing in React, Next.js, and UI/UX design for businesses or individual seeking performance and elegance';
  const defaultKeywords = 'web development, website design, custom web development, opulent host, premium web development, react development, Next.js, UI/UX design, figma design, custom websites, responsive design, SEO optimization, websites, business web solutions';
  const siteUrl = 'https://opulent-host.vercel.app';
  const defaultImage = '../../../public/opulent_favicon.png';

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta
        name="description"
        content={description || defaultDescription}
      />
      <meta
        name="keywords"
        content={keywords ? `${defaultKeywords}, ${keywords}` : defaultKeywords}
      />
      <meta property="og:title" content={title || siteName} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteName} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image || defaultImage} />
      <link rel="canonical" href={url ? `${siteUrl}${url}` : siteUrl} />
    </Helmet>
  );
};

export default SEO;