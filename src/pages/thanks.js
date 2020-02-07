import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BgImgPageTop from '../components/BgImgPageTop/BgImgPageTop';

const ThanksPage = () => (
  <Layout>
    <SEO title="Thank you for submitting" />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="Thank you for submitting!"
      pText="This is a test"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default ThanksPage;
