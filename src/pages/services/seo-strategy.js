import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import SeoStrategyPage__Header from '../../components/Services/Subpages/SeoStrategy/Page/SeoStrategyPage__Header';
import SeoStrategyPage__Body from '../../components/Services/Subpages/SeoStrategy/Page/SeoStrategyPage__Body';

const SEOStrategyPage = () => (
  <Layout>
    <SEO
      title="SEO Strategy"
      description="SEO Strategy"
      canonicalLink="https://johngrattan.com/services/seo-strategy/"
    />
    <SeoStrategyPage__Header
      Tag="header"
      className="bg-img-page-top"
      hOne="SEO Strategy"
    />
    <SeoStrategyPage__Body className="py-md-5 bg-texture-1" />
  </Layout>
);

export default SEOStrategyPage;
