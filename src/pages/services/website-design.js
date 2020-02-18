import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BgImgPageTop from '../../components/BgImgPageTop/BgImgPageTop';

const WebsiteDesignPage = () => (
  <Layout>
    <SEO title="Website Design" description="Website Design" />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="Website Design"
      pText="This is a test"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default WebsiteDesignPage;
