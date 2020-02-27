import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BgImgPageTop from '../components/BgImgPageTop/BgImgPageTop';

const PrivacyPage = () => (
  <Layout>
    <SEO
      title="Privacy Policy"
      description="Privacy Policy"
      canonicalLink="https://johngrattan.com/privacy/"
    />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="Privacy Policy"
      pText="This is a test"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default PrivacyPage;
