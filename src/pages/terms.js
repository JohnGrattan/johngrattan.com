import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const TermsPage = () => (
  <Layout>
    <SEO
      title="Terms of Use"
      description="Terms for using the John Grattan SEO & Web Design website and Agency GBP Hub's authorized Google Business Profile management connection."
      canonicalLink="https://johngrattan.com/terms/"
    />
    <header className="bg-img-page-top bg-purple">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            <h1 className="text-white font-weight-bold border border-primary rounded p-md-5 p-3 drop-shadow-dark text-lg">
              Terms of Use
            </h1>
          </div>
        </div>
      </div>
    </header>
    <section className="page-section bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <p>Effective September 18, 2026.</p>
            <p>
              These terms cover the John Grattan SEO & Web Design website,
              Agency GBP Hub and Agency OS, operated by John Grattan. Contact{' '}
              <a
                className="text-link-on-white"
                href="mailto:contact@johngrattan.com"
              >
                contact@johngrattan.com
              </a>{' '}
              with questions.
            </p>
            <h2 className="h3 mt-5">Website use</h2>
            <p>
              You may use this website to learn about the agency and request
              services. Do not use it to submit unlawful material, interfere
              with its operation or attempt unauthorized access. Website
              information describes services; a separate agreement establishes
              the scope and fees of an engagement.
            </p>
            <h2 className="h3 mt-5">Agency GBP Hub</h2>
            <p>
              Agency GBP Hub supports agreed Google Business Profile management
              work. Connect only Google accounts and business locations that you
              are authorized to manage. An account that manages multiple
              locations may authorize access to all of its permitted locations.
            </p>
            <p>
              By connecting an account, you authorize the agency's tools to
              access its permitted Business Profiles for your agreed services.
              Connecting alone does not approve unrelated edits. You are
              responsible for providing accurate business information and
              identifying the locations and work you want managed.
            </p>
            <h2 className="h3 mt-5">Google services and availability</h2>
            <p>
              Google controls its APIs and Business Profile services. An API
              connection does not guarantee search placement, lead volume,
              verification of a listing or uninterrupted access. Use of Google's
              services remains subject to Google's applicable terms.
            </p>
            <h2 className="h3 mt-5">Agency OS and Meta advertising</h2>
            <p>
              Agency OS is the agency's internal system for managing Meta
              (Facebook and Instagram) advertising. By granting the agency's
              Business Portfolio partner access to an ad account, Page or other
              business asset, you authorize the agency to read its data and to
              create, edit, pause and optimize campaigns for your agreed
              services. Share only assets you are authorized to manage. You can
              remove partner access at any time in Meta Business Settings,
              which stops future access but does not undo campaigns or changes
              already published. Meta controls its platform and APIs; use of
              Meta's services remains subject to Meta's applicable terms.
            </p>
            <h2 className="h3 mt-5">Disconnection and privacy</h2>
            <p>
              You may revoke the connection through your Google Account's
              third-party connections or contact the agency. Disconnecting stops
              future access and does not undo profile changes already completed.
              Your service agreement continues to govern the engagement's scope,
              fees and other terms.
            </p>
            <p>
              The{' '}
              <Link className="text-link-on-white" to="/privacy/">
                privacy policy
              </Link>{' '}
              explains how website information, connected Google account data and
              Meta Platform Data are handled, including retention and deletion
              requests.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TermsPage;
