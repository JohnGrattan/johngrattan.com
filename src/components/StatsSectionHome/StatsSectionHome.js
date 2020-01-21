import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const StatsSectionHome = () => {
  return (
    <section className="pt-3 p-lg-5 bg-white">
      <div className="container">
        <h2 className="text-center mt-0 text-dark">SEO Statistics for 2020</h2>
        <hr className="divider mt-4 mb-5" />
        <div className="col justify-content-center align-items-center">
          <div className="px-lg-5">
            <p className="text-left text-light lead px-lg-5">
              <span className="d-flex bg-dark rounded p-5 mb-5 drop-shadow-dark">
                <i className="fas fa-exclamation-circle mt-1 text-secondary"></i>
                <span className="ml-2">
                  <strong>72%</strong> of consumers who did a{' '}
                  <strong>local search</strong> visited a store{' '}
                  <strong>within five miles</strong>.
                  <span className="d-block">
                    (Source:{' '}
                    <a
                      className="text-secondary"
                      href="https://www.wordstream.com/blog/ws/2015/10/06/smx-east"
                    >
                      WordStream
                    </a>
                    )
                  </span>
                </span>
              </span>
              <span className="d-flex bg-dark rounded p-5 mb-5 drop-shadow-dark">
                <i className="fas fa-exclamation-circle mt-1 text-secondary"></i>
                <span className="ml-2">
                  In 2019, <strong>52%</strong> of all worldwide online{' '}
                  <strong>traffic comes from mobile</strong>, 45% from desktop.
                  <span className="d-block">
                    (Source:{' '}
                    <a
                      className="text-secondary"
                      href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide"
                    >
                      StatCounter
                    </a>
                    )
                  </span>
                </span>
              </span>
              <span className="d-flex bg-dark rounded p-5 mb-5 drop-shadow-dark">
                <i className="fas fa-exclamation-circle mt-1 text-secondary"></i>
                <span className="ml-2">
                  On the first page alone, the{' '}
                  <strong>first five organic results </strong>
                  account for <strong>67.60% of all the clicks</strong>.
                  <span className="d-block">
                    (Source:{' '}
                    <a
                      className="text-secondary"
                      href="https://www.zerolimitweb.com/organic-vs-ppc-2019-ctr-results-best-practices/"
                    >
                      Zero Limit Web
                    </a>
                    )
                  </span>
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSectionHome;
