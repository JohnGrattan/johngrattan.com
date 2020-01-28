import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BgImgPageTop from '../../components/BgImgPageTop/BgImgPageTop';

const LocalSeoPage = () => (
  <Layout>
    <SEO title="Local SEO" />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="Local SEO"
      pText="This is a test"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default LocalSeoPage;
