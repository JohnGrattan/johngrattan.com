import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import WebDevBlogPage__Header from '../../components/Blog/Subpages/WebDev/WebDevBlogPage__Header';
import WebDevBlogPage__Body from '../../components/Blog/Subpages/WebDev/WebDevBlogPage__Body';

const WebDevelopmentCategoryBlogPage = () => (
  <Layout>
    <SEO
      title="Web Development Blog Articles"
      description="Web Development Blog Articles"
      canonicalLink="https://johngrattan.com/blog/web-development"
    />
    <WebDevBlogPage__Header
      Tag="header"
      className="bg-img-page-top"
      hOne="Web Development Blog Articles"
    />
    <WebDevBlogPage__Body
      section="WebDevelopmentBlogPage__Section"
      className="py-md-5 bg-texture-1"
    />
  </Layout>
);

export default WebDevelopmentCategoryBlogPage;
