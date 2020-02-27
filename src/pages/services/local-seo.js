import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import LocalSeoPage__Header from '../../components/Services/Subpages/LocalSeo/Page/LocalSeoPage__Header';
import LocalSeoPage__Body from '../../components/Services/Subpages/LocalSeo/Page/LocalSeoPage__Body';

const LocalSeoPage = () => (
  <Layout>
    <SEO
      title="Local SEO"
      description="Local SEO"
      canonicalLink="https://johngrattan.com/services/local-seo/"
    />
    <LocalSeoPage__Header
      Tag="header"
      className="bg-img-page-top"
      hOne="Local SEO"
      pText="This is a test"
    />
    <LocalSeoPage__Body className="py-md-5 bg-texture-1" />
  </Layout>
);

export default LocalSeoPage;
