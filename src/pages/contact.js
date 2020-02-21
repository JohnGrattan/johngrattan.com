import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderContact from '../components/Contact/HeaderContact/HeaderContact';
import ContactSectionPage from '../components/Contact/ContactSectionPage/ContactSectionPage';

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact Me"
      description="Have any questions about SEO & Web Design? Not quite sure how I can help your business grow online and want to talk first? If you're ready to start working together today, call me at (401) 216-9868!"
      canonicalLink="https://johngrattan.com/contact"
    />
    <HeaderContact Tag="header" className="bg-img-page-top" hOne="Contact Me" />
    <ContactSectionPage className="pt-md-5 bg-texture-1" />
  </Layout>
);

export default ContactPage;
