import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import HeaderSocialMediaMarketing from '../../components/HeaderSocialMediaMarketing/HeaderSocialMediaMarketing';

const SocialMediaMarketingPage = () => (
  <Layout>
    <SEO
      title="Social Media Marketing"
      description="Social Media Marketing"
      canonicalLink="https://johngrattan.com/services/social-media-marketing/"
    />
    <HeaderSocialMediaMarketing
      Tag="header"
      className="bg-img-page-top"
      hOne="Social Media Marketing"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default SocialMediaMarketingPage;
