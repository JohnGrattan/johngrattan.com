import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';

const ThanksPage = () => {
  const data = useStaticQuery(graphql`
    query ThanksPageQ {
      masthead: file(relativePath: { eq: "images/bg-img-thank-you.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      texture: file(
        relativePath: { eq: "images/textures/gradient-squares.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageDataHeader = data.masthead.childImageSharp.fluid;
  const imageDataBody = data.texture.childImageSharp.fluid;

  return (
    <Layout>
      <SEO
        title="Thank you for submitting!"
        description="Thank you for submitting and showing interest! I look forward to working with you and providing value through digital marketing to your business."
        canonicalLink="https://johngrattan.com/thanks/"
      />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Thank You"
        alt="John Grattan SEO & Web Design Thank You page header background - pile of letters spelling out thank you"
      />
      <Body
        className="py-md-5 bg-texture-1"
        fluid={imageDataBody}
        hTwo="I appreciate your interest!"
        alt="John Grattan SEO & Web Design Thank You background section"
        text="You will receive an email shortly."
        linkTo="/"
        icon="fas fa-3x fa-home"
        label="Return Home"
      />
    </Layout>
  );
};

export default ThanksPage;
