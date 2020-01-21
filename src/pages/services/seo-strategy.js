import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BgImgPageTop from '../../components/BgImgPageTop/BgImgPageTop';

const SEOStrategy = () => (
  <Layout>
    <SEO title="SEO Strategy" />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="SEO Strategy"
      pText="This is a test"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default SEOStrategy;
