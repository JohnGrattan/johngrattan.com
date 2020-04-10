import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Header/Header';
import PricingPage__Body from '../components/Pricing/Page/PricingPage__Body';

const PricingPage = () => {
  const data = useStaticQuery(graphql`
    query PricingPageQ {
      masthead: file(relativePath: { eq: "images/bg-img-pricing.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageDataHeader = data.masthead.childImageSharp.fluid;
  return (
    <Layout>
      <SEO
        title="Pricing for Single/Monthly SEO & Web Design Services"
        description="I offer affordable investments for long-term business growth. My pricing structure offers single services and monthly options to boost your website rankings."
        canonicalLink="https://johngrattan.com/pricing/"
      />
      {/* <PricingPage__Header
      Tag="header"
      className="bg-img-page-top"
      hOne="Affordable Investments for Business Growth"
    /> */}
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Digital Marketing Service Prices"
        alt="John Grattan SEO & Web Design Thank You page header background - pile of letters spelling out thank you"
      />
      <PricingPage__Body className="py-md-5 bg-texture-1" />
    </Layout>
  );
};

export default PricingPage;
