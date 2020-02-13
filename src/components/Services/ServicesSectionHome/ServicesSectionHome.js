import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import StatsSectionHome from '../../StatsSectionHome/StatsSectionHome';
import Button from '../../Button/Button';

const ServicesSectionHome = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ServicesSectionHomeQ {
      masthead: file(relativePath: { eq: "images/bg-img-services.jpg" }) {
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
      alt="digital marketing services for small business"
    >
      <div className="container">
        <StatsSectionHome
          stat="72% of consumers who did a local search visited a store within five miles."
          srcUrl={'https://www.wordstream.com/blog/ws/2015/10/06/smx-east'}
          srcText="WordStream"
        />
        <h2 className="text-center mt-0 text-white drop-shadow-dark">
          Digital Marketing Services <br />
          for Small Business
        </h2>
        <hr className="divider mt-4 drop-shadow-dark" />
        <div className="row">
          <div className="col-md-6 text-center justify-content-center align-items-center">
            <div className="my-5 border shadow p-3 bg-texture-2">
              <i className="fas fa-4x fa-chess text-primary mb-4 drop-shadow"></i>
              <h3 className="h4 mb-2">SEO Strategy</h3>
              <hr className="light" />
              <div className="text-muted mb-0 text-left my-3">
                <p>
                  Every business is unique and faces their own marketing
                  challenges. It's my job to{' '}
                  <strong className="text-secondary">
                    diagnose these obstacles
                  </strong>{' '}
                  to formulate a successful SEO approach.
                </p>
                <p>
                  Researching your competition and understanding your customers
                  is crucial to{' '}
                  <strong className="text-secondary">
                    developing your sales funnel
                  </strong>
                  .
                </p>
              </div>
              <p className="text-muted mb-4 text-left">
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Create a monthly plan and content site map
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Analyze competitors and outperform
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Reverse engineer how customers find you
                  </span>
                </span>
              </p>
              <div className="my-3">
                <Button
                  btnlink="/services"
                  btnlabel="See My Strategy"
                  btnsolid={true}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center justify-content-center align-items-center">
            <div className="my-5 border shadow p-3 bg-texture-2">
              <i className="fas fa-4x fa-seedling text-primary mb-4 drop-shadow"></i>
              <h3 className="h4 mb-2">Organic SEO</h3>
              <hr className="light" />
              <div className="text-muted mb-0 text-left my-3">
                <p>
                  It's important to rank organically for relevant keywords
                  within your industry because it{' '}
                  <strong className="text-secondary">
                    drives quality traffic
                  </strong>{' '}
                  to your site.
                </p>
                <p>
                  By providing free value through your knowledge and expertise,
                  you can{' '}
                  <strong className="text-secondary">
                    build an audience and brand awareness
                  </strong>{' '}
                  as a trusted source.
                </p>
              </div>
              <p className="text-muted mb-4 text-left">
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Boost Google rankings for relevant keywords
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Create long term quality lead generation
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Free organic clicks save money vs. paid ads
                  </span>
                </span>
              </p>
              <div className="my-3">
                <Button
                  btnlink="/services"
                  btnlabel="See Why SEO Works"
                  btnsolid={true}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center justify-content-center align-items-center">
            <div className="my-5 border shadow p-3 bg-texture-2">
              <i className="fas fa-4x fa-search-location text-primary mb-4 drop-shadow"></i>
              <h3 className="h4 mb-2">Local SEO</h3>
              <hr className="light" />
              <div className="text-muted mb-0 text-left my-3">
                <p>
                  Google's exclusive focus on local intent will highlight the
                  top 3 results within the Map's Local 3-Pack, giving these
                  businesses an{' '}
                  <strong className="text-secondary">
                    automatic edge over their competitors
                  </strong>
                  .
                </p>
                <p>
                  By localizing your site and optimizing your Google My Business
                  account, I will{' '}
                  <strong className="text-secondary">
                    launch your business to the top 3 results
                  </strong>
                  .
                </p>
              </div>
              <p className="text-muted mb-4 text-left">
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Rank locally within all areas you service
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Rank for local searches with buyer intent
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Build reviews for stronger local reputation
                  </span>
                </span>
              </p>
              <div className="my-3">
                <Button
                  btnlink="/services"
                  btnlabel="See the Local Pack"
                  btnsolid={true}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center justify-content-center align-items-center">
            <div className="my-5 border shadow p-3 bg-texture-2">
              <i className="fas fa-4x fa-mouse-pointer text-primary mb-4 drop-shadow"></i>
              <h3 className="h4 mb-2">PPC Ads</h3>
              <hr className="light" />
              <div className="text-muted mb-0 text-left my-3">
                <p>
                  Pay-Per-Click (PPC) ads are an efficient, cost effective
                  marketing strategy because you{' '}
                  <strong className="text-secondary">
                    only pay when ads gets clicked
                  </strong>
                  .
                </p>
                <p>
                  PPC ads place your name{' '}
                  <strong className="text-secondary">
                    above the top results
                  </strong>
                  , allowing you to compete against higher ranking sites. Even
                  with no clicks, you still get free brand awareness.
                </p>
              </div>
              <p className="text-muted mb-4 text-left">
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Full control over maximum budget on ads
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Change your ad copy anytime to test what works
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Track stats to help understand your customers
                  </span>
                </span>
              </p>
              <div className="my-3">
                <Button
                  btnlink="/services"
                  btnlabel="See Why PPC Works"
                  btnsolid={true}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center justify-content-center align-items-center">
            <div className="my-5 border shadow p-3 bg-texture-2">
              <i className="fas fa-4x fa-drafting-compass text-primary mb-4 drop-shadow"></i>
              <h3 className="h4 mb-2">Website Design</h3>
              <hr className="light" />
              <div className="text-muted mb-0 text-left my-3">
                <p>
                  Users instantly judge your credibility the second they see
                  your design. This{' '}
                  <strong className="text-secondary">
                    first impression is critical to user engagement
                  </strong>{' '}
                  and can easily sabotage a conversion.
                </p>
                <p>
                  If your website is{' '}
                  <strong className="text-secondary">
                    outdated, malfunctioning or disorganized
                  </strong>
                  , I can help upgrade your design.
                </p>
              </div>
              <p className="text-muted mb-4 text-left">
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Responsive design on all devices and browsers
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Modern, user friendly layouts with call-to-action
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Brand consistency delivering your message
                  </span>
                </span>
              </p>
              <div className="my-3">
                <Button
                  btnlink="/services"
                  btnlabel="See Why Design Matters"
                  btnsolid={true}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center justify-content-center align-items-center">
            <div className="mt-5 border shadow p-3 bg-texture-2">
              <i className="fas fa-4x fa-laptop-code text-primary mb-4 drop-shadow"></i>
              <h3 className="h4 mb-2">Web Development</h3>
              <hr className="light" />
              <div className="text-muted mb-3 text-left my-3">
                <p>
                  Utilizing the latest web technologies will{' '}
                  <strong className="text-secondary">
                    prevent unwanted bloat, maintain clean code and result in
                    blazing speeds
                  </strong>{' '}
                  with ability to scale.
                </p>
                <p>
                  Let's{' '}
                  <strong className="text-secondary">
                    move past WordPress and cumbersome page builders
                  </strong>{' '}
                  to harness the power of modern development tools.
                </p>
              </div>
              <p className="text-muted mb-4 text-left">
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Keep customers happy with fast page speeds
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    No limits on features and functions
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    No servers or database to get hacked
                  </span>
                </span>
              </p>
              <div className="my-3">
                <Button
                  btnlink="/services"
                  btnlabel="See My Page Speeds"
                  btnsolid={true}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center justify-content-center align-items-center">
            <div className="my-5 border shadow p-3 bg-texture-2">
              <i className="fas fa-4x fa-users text-primary mb-4 drop-shadow"></i>
              <h3 className="h4 mb-2">Social Media</h3>
              <hr className="light" />
              <div className="text-muted mb-0 text-left my-3">
                <p>
                  Connecting your business with social media platforms like
                  Facebook, Instagram, LinkedIn and Pinterest are{' '}
                  <strong className="text-secondary">
                    pivotal to staying in touch
                  </strong>{' '}
                  with your customers on a daily basis.
                </p>
                <p>
                  I'll build your{' '}
                  <strong className="text-secondary">
                    brand awareness, customer loyalty and social engagement
                  </strong>{' '}
                  through daily posts, boosted ads and shareable content.
                </p>
              </div>
              <p className="text-muted mb-4 text-left">
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Setup branded social media accounts
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Custom profile images for each platform
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Test and measure the success of boosted ads
                  </span>
                </span>
              </p>
              <div className="my-3">
                <Button
                  btnlink="/services"
                  btnlabel="See Social Campaigns"
                  btnsolid={true}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center justify-content-center align-items-center">
            <div className="mt-5 border shadow p-3 bg-texture-2">
              <i className="fas fa-4x fa-envelope-open-text text-primary mb-4 drop-shadow"></i>
              <h3 className="h4 mb-2">Email Marketing</h3>
              <hr className="light" />
              <div className="text-muted mb-3 text-left my-3">
                <p>
                  Create a{' '}
                  <strong className="text-secondary">conversion machine</strong>{' '}
                  by directing subscribers into your ecosystem, providing free
                  valuable content on a regular basis and occasionally pushing a
                  call-to-action.
                </p>
                <p>
                  Since your email list requires each subscriber to opt-in, they
                  are{' '}
                  <strong className="text-secondary">
                    immediately qualified, excited to hear from you and more
                    likely to purchase
                  </strong>
                  .
                </p>
              </div>
              <p className="text-muted mb-4 text-left">
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Target particular groups with unique copy
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    A/B split testing to see what works
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">Create custom landing pages</span>
                </span>
              </p>
              <div className="my-3">
                <Button
                  btnlink="/services"
                  btnlabel="See Email Campaigns"
                  btnsolid={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default ServicesSectionHome;
