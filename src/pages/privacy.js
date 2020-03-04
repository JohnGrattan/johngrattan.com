import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PrivacyPage__Header from '../components/Privacy/Page/PrivacyPage__Header';
import PrivacyPage__Body from '../components/Privacy/Page/PrivacyPage__Body';

const PrivacyPage = () => (
  <Layout>
    <SEO
      title="Privacy Policy"
      description="Privacy Policy"
      canonicalLink="https://johngrattan.com/privacy/"
    />
    <PrivacyPage__Header
      Tag="header"
      className="bg-img-page-top"
      hOne="Privacy Policy"
    />
    <PrivacyPage__Body className="py-md-5 bg-texture-1" />
  </Layout>
);

export default PrivacyPage;
