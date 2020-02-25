import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import MarketingBlogPage__Header from '../../components/Blog/Subpages/Marketing/MarketingBlogPage__Header';
import MarketingBlogPage__Body from '../../components/Blog/Subpages/Marketing/MarketingBlogPage__Body';

const MarketingCategoryBlogPage = () => (
  <Layout>
    <SEO
      title="Marketing Blog Articles"
      description="Marketing Blog Articles"
      canonicalLink="https://johngrattan.com/blog/marketing"
    />
    <MarketingBlogPage__Header
      Tag="header"
      className="bg-img-page-top"
      hOne="Marketing Blog Articles"
    />
    <MarketingBlogPage__Body
      section="MarketingBlogPage__Section"
      className="py-md-5 bg-texture-1"
    />
  </Layout>
);

export default MarketingCategoryBlogPage;
