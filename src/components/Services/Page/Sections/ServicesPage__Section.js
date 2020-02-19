import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Button from '../../../Button/Button';
import ImgSeoStrategy from '../../../ImageComps/image-services-seo-strategy';
import ImgOrganicSeo from '../../../ImageComps/image-services-organic-seo';
import ImgLocalSeo from '../../../ImageComps/image-services-local-seo';
import ImgPpc from '../../../ImageComps/image-services-pay-per-click-ppc';
import ImgWebDesign from '../../../ImageComps/image-services-web-design';
import ImgWebDev from '../../../ImageComps/image-services-web-dev';
import ImgSocialMedia from '../../../ImageComps/image-services-social-media';
import ImgEmailMarketing from '../../../ImageComps/image-services-email-marketing';

const ServicesPage__Section = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ServicesPage__SectionQ {
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
        <div className="px-5 text-white text-center">
          <h2 className="mt-2">Drive Traffic</h2>
          <i className="fas fa-2x fa-long-arrow-alt-down text-secondary"></i>
          <h2 className="mt-2">Generate Leads</h2>
          <i className="fas fa-2x fa-long-arrow-alt-down text-secondary"></i>
          <h2 className="mt-2">Increase ROI</h2>
          <hr className="divider my-4" />
        </div>
        <div className="row">
          <div className="col-md-12 px-0 text-center justify-content-center align-items-center">
            <div className="row mx-0 container">
              <div
                id="seo-strategy"
                className="col-lg-8 my-5 border shadow p-3 bg-texture-2 order-0"
              >
                <i className="fas fa-4x fa-chess text-primary mt-3 mb-4 drop-shadow"></i>
                <h2 className="mb-2">SEO Strategy</h2>
                <hr className="light" />
                <div className="text-muted mb-0 text-left my-3">
                  <p>
                    Every business is unique and faces its own marketing
                    challenges. It's my job to{' '}
                    <strong className="text-info">
                      diagnose these obstacles
                    </strong>{' '}
                    to formulate a successful SEO approach.
                  </p>
                  <p>
                    Researching your competition and understanding your
                    customers is crucial to{' '}
                    <strong className="text-info">
                      developing your sales funnel
                    </strong>
                    .
                  </p>
                </div>
                <p className="text-muted mb-4 text-left">
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Create a monthly plan and content site map
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Analyze competitors and outperform
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Reverse engineer how customers find you
                    </span>
                  </span>
                </p>
                <div className="mt-5 mb-3">
                  <Button
                    btnlink="/services"
                    btnlabel="See My SEO Strategy"
                    btnsolid={true}
                  />
                </div>
              </div>
              <ImgSeoStrategy className="d-none d-lg-inline col-lg-4 px-0 text-center justify-content-center align-items-center my-5 d-md-none d-lg-flex order-1" />
            </div>
          </div>

          <div className="col-md-12 px-0 text-center justify-content-center align-items-center">
            <div className="row mx-0 container">
              <ImgOrganicSeo className="d-none d-lg-inline col-lg-4 px-0 text-center justify-content-center align-items-center my-5 d-md-none d-lg-flex order-1 order-lg-0" />
              <div
                id="organic-seo"
                className="col-lg-8 my-5 border shadow p-3 bg-texture-2 order-0 order-lg-1"
              >
                <i className="fas fa-4x fa-seedling text-primary mt-3 mb-4 drop-shadow"></i>
                <h2 className="mb-2">Organic SEO</h2>
                <hr className="light" />
                <div className="text-muted mb-0 text-left my-3">
                  <p>
                    It's important to rank organically for relevant keywords
                    within your industry because it{' '}
                    <strong className="text-info">
                      drives quality traffic
                    </strong>{' '}
                    to your site.
                  </p>
                  <p>
                    By providing free value through your knowledge and
                    expertise, you can{' '}
                    <strong className="text-info">
                      build an audience and brand awareness
                    </strong>{' '}
                    as a trusted source.
                  </p>
                </div>
                <p className="text-muted mb-4 text-left">
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Boost Google rankings for relevant keywords
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Create long term quality lead generation
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Free organic clicks save money vs. paid ads
                    </span>
                  </span>
                </p>
                <div className="mt-5 mb-3">
                  <Button
                    btnlink="/services"
                    btnlabel="See Why Organic SEO Works"
                    btnsolid={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 px-0 text-center justify-content-center align-items-center">
            <div className="row mx-0 container">
              <div
                id="local-seo"
                className="col-lg-8 my-5 border shadow p-3 bg-texture-2 order-0"
              >
                <i className="fas fa-4x fa-search-location text-primary mt-3 mb-4 drop-shadow"></i>
                <h2 className="mb-2">Local SEO</h2>
                <hr className="light" />
                <div className="text-muted mb-0 text-left my-3">
                  <p>
                    Google's exclusive focus on local intent will highlight the
                    top 3 results within the Map's Local 3-Pack, giving these
                    businesses an{' '}
                    <strong className="text-info">
                      automatic edge over its competitors
                    </strong>
                    .
                  </p>
                  <p>
                    By localizing your site and optimizing your Google My
                    Business account, I will{' '}
                    <strong className="text-info">
                      launch your business to the top 3 results
                    </strong>
                    .
                  </p>
                </div>
                <p className="text-muted mb-4 text-left">
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Rank locally within all areas you service
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Rank for local searches with buyer intent
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Build reviews for stronger local reputation
                    </span>
                  </span>
                </p>
                <div className="mt-5 mb-3">
                  <Button
                    btnlink="/services"
                    btnlabel="See Why Local SEO Works"
                    btnsolid={true}
                  />
                </div>
              </div>
              <ImgLocalSeo className="d-none d-lg-inline col-lg-4 px-0 text-center justify-content-center align-items-center my-5 d-md-none d-lg-flex order-1" />
            </div>
          </div>
          <div className="col-md-12 px-0 text-center justify-content-center align-items-center">
            <div className="row mx-0 container">
              <ImgPpc className="d-none d-lg-inline col-lg-4 px-0 text-center justify-content-center align-items-center my-5 d-md-none d-lg-flex order-1 order-lg-0" />
              <div
                id="ppc-ads"
                className="col-lg-8 my-5 border shadow p-3 bg-texture-2 order-0 order-lg-1"
              >
                <i className="fas fa-4x fa-mouse-pointer text-primary mt-3 mb-4 drop-shadow"></i>
                <h2 className="mb-2">PPC Ads</h2>
                <hr className="light" />
                <div className="text-muted mb-0 text-left my-3">
                  <p>
                    Pay-Per-Click (PPC) ads are an efficient, cost-effective
                    marketing strategy because you{' '}
                    <strong className="text-info">
                      only pay when ads get clicked
                    </strong>
                    .
                  </p>
                  <p>
                    PPC ads place your name{' '}
                    <strong className="text-info">above the top results</strong>
                    , allowing you to compete against higher ranking sites. Even
                    with no clicks, you still get free brand awareness.
                  </p>
                </div>
                <p className="text-muted mb-4 text-left">
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Full control over maximum budget on ads
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Change your ad copy anytime to test what works
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Track stats to help understand your customers
                    </span>
                  </span>
                </p>
                <div className="mt-5 mb-3">
                  <Button
                    btnlink="/services"
                    btnlabel="See If PPC Is For You"
                    btnsolid={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 px-0 text-center justify-content-center align-items-center">
            <div className="row mx-0 container">
              <div
                id="web-design"
                className="col-lg-8 my-5 border shadow p-3 bg-texture-2 order-0"
              >
                <i className="fas fa-4x fa-drafting-compass text-primary mt-3 mb-4 drop-shadow"></i>
                <h2 className="mb-2">Website Design</h2>
                <hr className="light" />
                <div className="text-muted mb-0 text-left my-3">
                  <p>
                    Users instantly judge your credibility the second they see
                    your design. This{' '}
                    <strong className="text-info">
                      first impression is critical to user engagement
                    </strong>{' '}
                    and can easily sabotage a conversion.
                  </p>
                  <p>
                    If your website is{' '}
                    <strong className="text-info">
                      outdated, malfunctioning or disorganized
                    </strong>
                    , I can help upgrade your design for a great user
                    experience.
                  </p>
                </div>
                <p className="text-muted mb-4 text-left">
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Responsive design on all devices and browsers
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Modern, user-friendly layouts with call-to-action
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Brand consistency delivering your message
                    </span>
                  </span>
                </p>
                <div className="mt-5 mb-3">
                  <Button
                    btnlink="/services"
                    btnlabel="See Why Design Matters"
                    btnsolid={true}
                  />
                </div>
              </div>
              <ImgWebDesign className="d-none d-lg-inline col-lg-4 px-0 text-center justify-content-center align-items-center my-5 d-md-none d-lg-flex order-1" />
            </div>
          </div>
          <div className="col-md-12 px-0 text-center justify-content-center align-items-center">
            <div className="row mx-0 container">
              <ImgWebDev className="d-none d-lg-inline col-lg-4 px-0 text-center justify-content-center align-items-center my-5 d-md-none d-lg-flex order-1 order-lg-0" />
              <div
                id="web-dev"
                className="col-lg-8 my-5 border shadow p-3 bg-texture-2 order-0 order-lg-1"
              >
                <i className="fas fa-4x fa-laptop-code text-primary mt-3 mb-4 drop-shadow"></i>
                <h2 className="mb-2">Web Development</h2>
                <hr className="light" />
                <div className="text-muted mb-3 text-left my-3">
                  <p>
                    Utilizing the latest web technologies will{' '}
                    <strong className="text-info">
                      prevent unwanted bloat, maintain clean code and result in
                      blazing speeds
                    </strong>{' '}
                    with the ability to scale your new website.
                  </p>
                  <p>
                    Let's{' '}
                    <strong className="text-info">
                      move past WordPress and cumbersome page builders
                    </strong>{' '}
                    to harness the power of modern development tools.
                  </p>
                </div>
                <p className="text-muted mb-4 text-left">
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Keep customers happy with fast page speeds
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      No themes or plugins that limit development options
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      No servers or database to get hacked
                    </span>
                  </span>
                </p>
                <div className="mt-5 mb-3">
                  <Button
                    btnlink="/services"
                    btnlabel="See My Page Speeds"
                    btnsolid={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 px-0 text-center justify-content-center align-items-center">
            <div className="row mx-0 container">
              <div
                id="social-media"
                className="col-lg-8 my-5 border shadow p-3 bg-texture-2 order-0"
              >
                <i className="fas fa-4x fa-users text-primary mt-3 mb-4 drop-shadow"></i>
                <h2 className="mb-2">Social Media</h2>
                <hr className="light" />
                <div className="text-muted mb-0 text-left my-3">
                  <p>
                    Connecting your business with social media platforms like
                    Facebook, Instagram, LinkedIn and Pinterest are{' '}
                    <strong className="text-info">
                      pivotal to staying in touch
                    </strong>{' '}
                    with your customers on a daily basis.
                  </p>
                  <p>
                    I'll build your{' '}
                    <strong className="text-info">
                      brand awareness, customer loyalty and social engagement
                    </strong>{' '}
                    through daily posts, boosted ads and shareable content.
                  </p>
                </div>
                <p className="text-muted mb-4 text-left">
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Setup branded social media accounts
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Custom profile images for each platform
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Test and measure the success of boosted ads
                    </span>
                  </span>
                </p>
                <div className="mt-5 mb-3">
                  <Button
                    btnlink="/services"
                    btnlabel="See More On Social Media"
                    btnsolid={true}
                  />
                </div>
              </div>
              <ImgSocialMedia className="d-none d-lg-inline col-lg-4 px-0 text-center justify-content-center align-items-center my-5 d-md-none d-lg-flex order-1" />
            </div>
          </div>
          <div className="col-md-12 px-0 text-center justify-content-center align-items-center">
            <div className="row mx-0 container">
              <ImgEmailMarketing className="d-none d-lg-inline col-lg-4 px-0 text-center justify-content-center align-items-center my-5 d-md-none d-lg-flex order-1 order-lg-0" />
              <div
                id="email-marketing"
                className="col-lg-8 my-5 border shadow p-3 bg-texture-2 order-0 order-lg-1"
              >
                <i className="fas fa-4x fa-envelope-open-text text-primary mt-3 mb-4 drop-shadow"></i>
                <h2 className="mb-2">Email Marketing</h2>
                <hr className="light" />
                <div className="text-muted mb-3 text-left my-3">
                  <p>
                    Create a{' '}
                    <strong className="text-info">conversion machine</strong> by
                    directing subscribers into your ecosystem, providing free
                    valuable content on a regular basis and occasionally pushing
                    a call-to-action.
                  </p>
                  <p>
                    Since your email list requires each subscriber to opt-in,
                    they are{' '}
                    <strong className="text-info">
                      immediately qualified, excited to hear from you and more
                      likely to purchase
                    </strong>
                    .
                  </p>
                </div>
                <p className="text-muted mb-4 text-left">
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      Target particular groups with unique copy
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      A/B split testing to see what works
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">Create custom landing pages</span>
                  </span>
                </p>
                <div className="mt-5 mb-3">
                  <Button
                    btnlink="/services"
                    btnlabel="See More On Email Campaigns"
                    btnsolid={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default ServicesPage__Section;
