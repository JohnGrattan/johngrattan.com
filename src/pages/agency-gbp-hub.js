import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import SEO from '../components/seo';
import AgencyGbpHubSection from '../components/AgencyGbpHub/AgencyGbpHubSection';

const AgencyGbpHubPage = () => (
  <Layout>
    <SEO
      title="Agency GBP Hub"
      description="Learn how John Grattan's Agency GBP Hub connects authorized Google accounts to manage business profiles and services."
      canonicalLink="https://johngrattan.com/agency-gbp-hub/"
    />
    <Helmet>
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <header className="bg-img-page-top bg-purple">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            <h1 className="text-white font-weight-bold border border-primary rounded p-md-5 p-3 drop-shadow-dark text-lg">
              Agency GBP Hub
            </h1>
          </div>
        </div>
      </div>
    </header>
    <AgencyGbpHubSection />
  </Layout>
);

export default AgencyGbpHubPage;
