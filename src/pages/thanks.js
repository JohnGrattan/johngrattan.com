import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Helmet from 'react-helmet';
import ThankYouPage__Header from '../components/ThankYou/Page/ThankYouPage__Header';
import ThankYouPage__Body from '../components/ThankYou/Page/ThankYouPage__Body';

const ThanksPage = () => (
  <Layout>
    <SEO
      title="Thank you for submitting!"
      description="Thank you for submitting and showing interest! I look forward to working with you and providing value through digital marketing to your business."
      canonicalLink="https://johngrattan.com/thanks/"
    />
    <Helmet>
      <meta name="robots" content="noindex" />
    </Helmet>
    <ThankYouPage__Header
      Tag="header"
      className="bg-img-page-top"
      hOne="Thank You"
    />
    <ThankYouPage__Body className="py-md-5 bg-texture-1" />
  </Layout>
);

export default ThanksPage;
