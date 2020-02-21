/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title, canonicalLink }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const structuredDataLocalBusiness = `{
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "John Grattan SEO & Web Design",
    "priceRange": "$100 - $500",
    "description": "John Grattan SEO & Web Design offers affordable Digital Marketing services such as SEO, SEM, Website Design and Web Development to small businesses throughout Massachusetts, from Boston to Plymouth.",
    "image":
      "https://johngrattan.com/static/8cad32f9172e09f0099b1a68e49be910/bc59e/john-grattan-circle-headshot-green.png",
    "telephone": "+1-401 216 9868",
    "email": "contact@johngrattan.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "30 Roosevelt Road",
      "addressLocality": "Plymouth",
      "addressRegion": "MA",
      "addressCountry": "US",
      "postalCode": "02360"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.9359701",
      "longitude": "-70.7228474"
    },
    "hasMap": "https://www.google.com/maps/place/John+Grattan+SEO+%26+Web+Design/@41.9359701,-70.7228474,15z/data=!4m5!3m4!1s0x0:0xbffcbd1521f630a0!8m2!3d41.9359701!4d-70.7228474",
    "openingHours": "Mo, Tu, We, Th, Fr 09:00-17:00",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "telephone": "+1-401 216 9868"
    },
    "url": "https://johngrattan.com/"
  }`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <link rel="canonical" href={canonicalLink} />

      <meta name="description" content={metaDescription} />

      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />

      <script type="application/ld+json">{structuredDataLocalBusiness}</script>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
