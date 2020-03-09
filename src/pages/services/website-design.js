import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BgImgPageTop from '../../components/BgImgPageTop/BgImgPageTop';

const WebsiteDesignPage = () => (
  <Layout>
    <SEO
      title="Website Design Services"
      description="Website Design"
      canonicalLink="https://johngrattan.com/services/website-design/"
    />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="Website Design"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default WebsiteDesignPage;
