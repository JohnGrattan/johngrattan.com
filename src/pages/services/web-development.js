import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BgImgPageTop from '../../components/BgImgPageTop/BgImgPageTop';

const WebDevelopmentPage = () => (
  <Layout>
    <SEO
      title="Web Development Services"
      description="Web Development"
      canonicalLink="https://johngrattan.com/services/web-development/"
    />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="Web Development"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default WebDevelopmentPage;
