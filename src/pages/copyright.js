import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BgImgPageTop from '../components/BgImgPageTop/BgImgPageTop';

const CopyrightPage = () => (
  <Layout>
    <SEO
      title="Copyright"
      description="Copyright"
      canonicalLink="https://johngrattan.com/copyright"
    />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="Copyright"
      pText="This is a test"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default CopyrightPage;
