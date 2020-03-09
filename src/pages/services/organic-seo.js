import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import OrganicSeoPage__Header from '../../components/Services/Subpages/OrganicSeo/Page/OrganicSeoPage__Header';
import OrganicSeoPage__Body from '../../components/Services/Subpages/OrganicSeo/Page/OrganicSeoPage__Body';

const OrganicSeoPage = () => (
  <Layout>
    <SEO
      title="Organic SEO Services"
      description="Organic SEO"
      canonicalLink="https://johngrattan.com/services/organic-seo/"
    />
    <OrganicSeoPage__Header
      Tag="header"
      className="bg-img-page-top"
      hOne="Organic SEO"
    />
    <OrganicSeoPage__Body className="py-md-5 bg-texture-1" />
  </Layout>
);

export default OrganicSeoPage;
