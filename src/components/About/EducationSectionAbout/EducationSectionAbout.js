import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const EducationSectionAbout = ({ className }) => {
  const data = useStaticQuery(graphql`
    query EducationSectionAboutQ {
      masthead: file(
        relativePath: {
          eq: "images/bg-img-education-bridgewater-state-university.jpg"
        }
      ) {
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
      alt="john grattan education bridgewater state university about me background"
    >
      <div id="education" className="text-center pt-5 drop-shadow-dark">
        <i className="fas fa-3x fa-user-graduate mb-3 text-primary"></i>
        <h3 className="mt-2 text-white">Education</h3>
        <hr className="divider mt-4" />
      </div>
      <div className="row justify-content-center align-items-baseline pt-5 p-3">
        <div className="container text-center border border-secondary col-md-7 pt-3 drop-shadow">
          <p>
            <strong className="text-primary lead">
              Bridgewater State University
            </strong>
          </p>
          <p className="text-white">Class of 2013 - Earned Degree of:</p>
          <p className="text-white">Bachelor of Science in Computer Science</p>
        </div>
      </div>
      <div className="row justify-content-center align-items-baseline py-5 px-md-3">
        <div className="container">
          <div className="container mb-3 pt-2 border border-secondary drop-shadow bg-texture-2">
            <div className="p-5">
              <p>
                I studied Computer Science in college and went from playing
                around with Basic, Q Basic and Visual Basic to learning Java,
                C++, and Python.
              </p>
              <p>
                Technology has changed a lot in the last decade, predominately
                moving in the direction of Web Development, Web Apps, SaaS, IaaS
                and PaaS.
              </p>
              <p>
                Naturally, I progressed with the times and focused on JavaScript
                and ReactJS for Web Development and Web Apps.
              </p>
              <p>
                Now, I'm a self-taught Full Stack Web Developer with skills in
                HTML5, CSS3, Sass, Bootstrap, JavaScript, jQuery, ReactJS,
                Node.js, Express, GraphQL, and GatsbyJS.
              </p>
              <p>
                I soon realized it was imperative to learn UI/UX design and SEO.
              </p>
              <p>
                After all, what good a beautifully coded website if it looks
                terrible and no one can find it?!
              </p>
              <p className="text-info">
                Now I can officially say I've developed the skills to consider
                myself a 'one-man Digital Marketing Agency', capable of
                competently handling the full service from beginning to end.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default EducationSectionAbout;
