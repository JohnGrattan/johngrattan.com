import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import StatsSectionHome from '../../../components/StatsSectionHome/StatsSectionHome';
import Button from '../../Button/Button';

const Home__ServicesSection = ({ className }) => {
  const data = useStaticQuery(graphql`
    query Home__ServicesSectionQ {
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
      <div className="container pb-5">
        <StatsSectionHome
          stat="72% of consumers who did a local search visited a store within five miles."
          srcUrl={'https://www.wordstream.com/blog/ws/2015/10/06/smx-east'}
          srcText="WordStream"
        />
        <h2 className="display-4 text-center pt-5 text-white drop-shadow-dark">
          Digital Marketing Services
        </h2>
        <hr className="divider mt-4 pb-5 drop-shadow-dark" />
        <div className="row my-5 text-center text-white">
          <div className="col-md-4 my-5 justify-content-center align-items-baseline">
            <div className="container ">
              <i className="fas fa-5x fa-tools text-primary mb-4 drop-shadow-dark"></i>
              <h3 className="lead bg-info border border-white p-3 mt-1 drop-shadow-dark">
                <strong className="drop-shadow">Building Websites</strong>
              </h3>
              <p className="mt-3">
                From the design process to the development build cycle, I will
                launch a clean, professional website that reflects your brand
                and your business.
              </p>
            </div>
          </div>
          <div className="col-md-4 my-5 justify-content-center align-items-baseline">
            <div className="container ">
              <i className="fas fa-5x fa-rocket text-primary mb-4 drop-shadow-dark"></i>
              <h3 className="lead bg-info border border-white p-3 mt-1 drop-shadow-dark">
                <strong className="drop-shadow">
                  Search Engine Optimization
                </strong>
              </h3>
              <p className="mt-3">
                Your new website deserves strong visibility in search engine
                results pages. I will outrank your competitors and place your
                business at the top.
              </p>
            </div>
          </div>
          <div className="col-md-4 my-5 justify-content-center align-items-baseline">
            <div className="container ">
              <i className="fas fa-5x fa-funnel-dollar text-primary mb-4 drop-shadow-dark"></i>
              <h3 className="lead bg-info border border-white p-3 mt-1 drop-shadow-dark">
                <strong className="drop-shadow">Lead Generation</strong>
              </h3>
              <p className="mt-3">
                I can implement marketing campaigns that fit your budget and
                will drive traffic to your website from social media, email
                opt-ins, and Google Ads.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-5">
            <p className="lead mt-1 drop-shadow-dark border-bottom border-info border-size-5">
              <strong className="drop-shadow">
                Interested in More Details?
              </strong>
            </p>
            <div className="container">
              <i className="fas fa-4x fa-long-arrow-alt-down text-info mb-4 drop-shadow-dark"></i>
            </div>
            <Button
              btnlink="/services"
              btnlabel="See All My Services"
              btnsolid={true}
            />
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Home__ServicesSection;
