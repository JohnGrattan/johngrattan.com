import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Button from '../Button/Button';

const ProcessSectionHome = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ProcessSectionHomeQ {
      masthead: file(relativePath: { eq: "images/bg-img-process.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.masthead.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="seo process background"
    >
      <div className="container">
        <h2 className="text-center mt-0 text-white drop-shadow-dark">
          SEO Process
        </h2>
        <hr className="divider mt-4 drop-shadow-dark" />
        <div className="timeline container mt-5">
          <div className="content-container left">
            <div className="content">
              <h3>
                <i className="fas fa-handshake mr-3 text-secondary"></i>
                Learning Phase
              </h3>
              <hr className="secondary" />
              <p>
                It's my job to learn and understand every aspect of your
                business. From{' '}
                <strong className="text-secondary">your brand</strong> and{' '}
                <strong className="text-secondary">your personality</strong> to{' '}
                <strong className="text-secondary">your services</strong> and{' '}
                <strong className="text-secondary">your clients</strong>, I'll
                need a full evaluation. This will allow me to create an{' '}
                <strong className="text-secondary">
                  accurate digital representation
                </strong>{' '}
                of your company and identify important{' '}
                <strong className="text-secondary">
                  customer demographics
                </strong>
                .
              </p>
            </div>
          </div>
          <div className="content-container right">
            <div className="content">
              <h3>
                <i className="fas fa-stethoscope mr-3 text-secondary"></i>
                Diagnostic Phase
              </h3>

              <hr className="secondary" />
              <p>
                This is where we focus on{' '}
                <strong className="text-secondary">your goals</strong> and{' '}
                <strong className="text-secondary">your challenges</strong> to
                figure out what exactly needs to be done to{' '}
                <strong className="text-secondary">
                  successfully overcome any obstacles
                </strong>
                . Prioritizing this phase will help{' '}
                <strong className="text-secondary">
                  eliminate the waste of time and money
                </strong>{' '}
                on unnecessary features and functions. From defining a clear
                call-to-action to analyzing previous website metrics for
                patterns and trends, we'll start{' '}
                <strong className="text-secondary">
                  narrowing down the correct solution
                </strong>
                .
              </p>
            </div>
          </div>
          <div className="content-container left">
            <div className="content">
              <h3>
                {' '}
                <i className="fas fa-pencil-ruler mr-3 text-secondary"></i>
                Blueprint Phase
              </h3>
              <hr className="secondary" />
              <p>
                Now that we know what we're working with, it's time to{' '}
                <strong className="text-secondary">
                  benchmark your current metrics
                </strong>{' '}
                and formulate our approach. Establishing a baseline will help us
                evaluate future success. Next, I'll{' '}
                <strong className="text-secondary">
                  analyze your competition
                </strong>
                , strategically perform{' '}
                <strong className="text-secondary">keyword research</strong> and
                build a structured{' '}
                <strong className="text-secondary">site map</strong> to organize
                your content creation. From here, we can outline a development
                schedule to{' '}
                <strong className="text-secondary">
                  keep track of our progress
                </strong>
                .
              </p>
            </div>
          </div>
          <div className="content-container right">
            <div className="content">
              <h3>
                <i className="fas fa-palette mr-3 text-secondary"></i>Design
                Phase
              </h3>
              <hr className="secondary" />
              <p>
                We'll browse through different layouts to figure out what{' '}
                <strong className="text-secondary">
                  designs, features and functionalities really stand out to you
                </strong>
                . We're not here to find some cookie cutter format that looks
                like everyone else. This is just to recognize the possibilities
                and{' '}
                <strong className="text-secondary">
                  customize a site you can be proud of
                </strong>
                . We'll discuss customer decision paths to help develop a{' '}
                <strong className="text-secondary">
                  lead generating sales funnel
                </strong>{' '}
                and organize your information architecture. Your interface will
                be user centric and focus on their{' '}
                <strong className="text-secondary">positive experience</strong>.
              </p>
            </div>
          </div>
          <div className="content-container left">
            <div className="content">
              <h3>
                <i className="fab fa-react mr-3 text-secondary"></i>Development
                Phase
              </h3>
              <hr className="secondary" />
              <p>
                Here we start turning ideas into reality as I{' '}
                <strong className="text-secondary">
                  hand code your design into a functioning website
                </strong>
                . Following the latest quality standards and current best
                practices, I'll develop a{' '}
                <strong className="text-secondary">
                  clean, robust and secure
                </strong>{' '}
                code base. I'll handle everything regarding your domain,
                hosting, SSL, CDN,{' '}
                <strong className="text-secondary">
                  on-page technical SEO, schema markup and structured data
                </strong>
                .
              </p>
            </div>
          </div>
          <div className="content-container right">
            <div className="content">
              <h3>
                <i className="fas fa-search-dollar mr-3 text-secondary"></i>SEO
                Phase
              </h3>
              <hr className="secondary" />
              <p>
                This is where the{' '}
                <strong className="text-secondary">long term SEO</strong> and{' '}
                <strong className="text-secondary">short term SEM</strong>{' '}
                tactics come together to produce the{' '}
                <strong className="text-secondary">
                  aggressive marketing program
                </strong>{' '}
                we previously planned. Through ongoing content creation,
                backlink generation,{' '}
                <strong className="text-secondary">local SEO strategy</strong>,
                pay-per-click advertising campaigns with{' '}
                <strong className="text-secondary">
                  optimized landing pages
                </strong>{' '}
                and a strong social media presence, I will ensure you become a{' '}
                <strong className="text-secondary">
                  stable domain authority within your industry
                </strong>
                .
              </p>
            </div>
          </div>
          <div className="content-container left">
            <div className="content">
              <h3>
                <i className="fas fa-sync-alt mr-3 text-secondary"></i>
                Refinement Phase
              </h3>
              <hr className="secondary" />
              <p>
                Ongoing metric analysis and data monitoring will often result in
                <strong className="text-secondary">
                  strategy adaptation and refinement
                </strong>
                . Tracking what needs work, while{' '}
                <strong className="text-secondary">
                  capitalizing on successful benchmarks
                </strong>{' '}
                will further optimize our SEO plan. I'll be continuously
                evaluating Google Analytics and Google Search Console for{' '}
                <strong className="text-secondary">positive results</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default ProcessSectionHome;
