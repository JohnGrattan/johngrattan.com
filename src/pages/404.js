import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BgImgPageTop from '../components/BgImgPageTop/BgImgPageTop';

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404: Not Found"
      description="404: Not Found"
      canonicalLink="https://johngrattan.com/404/"
    />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="404: Not Found"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default NotFoundPage;
