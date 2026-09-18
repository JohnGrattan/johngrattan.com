import React from 'react';
import { Link } from 'gatsby';

const AgencyGbpHubSection = () => (
  <section
    id="agency-gbp-hub"
    className="page-section bg-white border-bottom border-secondary"
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <h2 className="text-center">How the connection works</h2>
          <hr className="divider my-4" />
          <p>
            Agency GBP Hub is John Grattan's tool for managing clients' Google
            Business Profiles. With your authorization, it connects the Google
            account you use to manage your business so the agency can review
            your profiles and update business information and services as part
            of your agreed marketing work.
          </p>
          <p>
            Each account has its own connection. An account managing multiple
            locations can provide access to those locations. The app requests
            Business Profile management access and basic identity information to
            confirm the authorizing email. It does not request access to your
            Gmail messages, Google Drive files or Google Analytics data.
          </p>
          <p>
            You can disconnect through your Google Account or contact{' '}
            <a
              className="text-link-on-white"
              href="mailto:contact@johngrattan.com"
            >
              contact@johngrattan.com
            </a>
            .
          </p>
          <p className="mb-0">
            <Link className="text-link-on-white" to="/privacy/">
              Privacy policy
            </Link>
            {' · '}
            <Link className="text-link-on-white" to="/terms/">
              Terms of use
            </Link>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AgencyGbpHubSection;
