import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BgImgPageTop from '../components/BgImgPageTop/BgImgPageTop';

const ThanksPage = () => (
  <Layout>
    <SEO
      title="Thank you for submitting!"
      description="Thank you for submitting and showing interest! I look forward to working with you and providing value through digital marketing to your business."
      canonicalLink="https://johngrattan.com/thanks/"
    />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="Thank you for submitting!"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default ThanksPage;
