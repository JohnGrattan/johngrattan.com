import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const PrivacyPage__Section = ({ className }) => {
  const data = useStaticQuery(graphql`
    query PrivacyPage__SectionQ {
      masthead: file(
        relativePath: { eq: "images/bg-img-privacy-section.jpg" }
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
      alt="John Grattan SEO & Web Design Privacy Policy section background - padlock showing digital security"
    >
      <div className="container p-lg-5">
        <div className="row bg-white my-3 p-2 p-lg-5">
          <div className="mx-auto py-3 px-5">
            <h2 className="mt-2 text-center">Welcome to My Privacy Policy</h2>
            <hr className="divider my-4" />
          </div>
          <h3 className="pt-5 pb-4">
            Your privacy is critically important to me.
          </h3>
          <p>
            It is John Grattan SEO & Web Design's policy to respect your privacy
            regarding any information I may collect while operating my website.
            This Privacy Policy applies to{' '}
            <Link className="text-link-on-white" to="/">
              https://johngrattan.com
            </Link>{' '}
            (hereinafter, "I", "me", "my", or "https://johngrattan.com"). I
            respect your privacy and I'm committed to protecting personally
            identifiable information you may provide me through the Website. I
            have adopted this privacy policy ("Privacy Policy") to explain what
            information may be collected on my Website, how I use this
            information, and under what circumstances I may disclose the
            information to third parties. This Privacy Policy applies only to
            information I collect through the Website and does not apply to my
            collection of information from other sources.
          </p>
          <p>
            This Privacy Policy, together with the Terms and conditions posted
            on my Website, set forth the general rules and policies governing
            your use of my Website. Depending on your activities when visiting
            my Website, you may be required to agree to additional terms and
            conditions.
          </p>
          <h3 className="pt-5 pb-4">Website Visitors</h3>
          <p>
            Like most website operators, John Grattan SEO & Web Design collects
            non-personally-identifying information of the sort that web browsers
            and servers typically make available, such as the browser type,
            language preference, referring site, and the date and time of each
            visitor request. John Grattan SEO & Web Design's purpose in
            collecting non-personally identifying information is to better
            understand how John Grattan SEO & Web Design's visitors use my
            website. From time to time, John Grattan SEO & Web Design may
            release non-personally-identifying information in the aggregate,
            e.g., by publishing a report on trends in the usage of its website.
          </p>
          <p>
            John Grattan SEO & Web Design also collects potentially
            personally-identifying information like Internet Protocol (IP)
            addresses for logged in users and for users leaving comments on
            https://johngrattan.com blog posts. John Grattan SEO & Web Design
            only discloses logged in user and commenter IP addresses under the
            same circumstances that it uses and discloses personally-identifying
            information as described below.
          </p>
          <h3 className="pt-5 pb-4">
            Gathering of Personally-Identifying Information
          </h3>
          <p>
            Certain visitors to John Grattan SEO & Web Design's website choose
            to interact with John Grattan SEO & Web Design in ways that require
            John Grattan SEO & Web Design to gather personally-identifying
            information. The amount and type of information that John Grattan
            SEO & Web Design gathers depends on the nature of the interaction.
            For example, I ask visitors who sign up for a blog at
            https://johngrattan.com to provide a username and email address.
          </p>
          <h3 className="pt-5 pb-4">Security</h3>
          <p>
            The security of your Personal Information is important to me, but
            remember that no method of transmission over the Internet, or method
            of electronic storage is 100% secure. While I strive to use
            commercially acceptable means to protect your Personal Information,
            I cannot guarantee its absolute security.
          </p>
          <h3 className="pt-5 pb-4">Links To External Sites</h3>
          <p>
            My Service may contain links to external sites that are not operated
            by me. If you click on a third party link, you will be directed to
            that third party's site. I strongly advise you to review the Privacy
            Policy and terms and conditions of every site you visit.
          </p>
          <p>
            I have no control over, and assume no responsibility for the
            content, privacy policies or practices of any third party sites,
            products or services.
          </p>
          <h3 className="pt-5 pb-4">
            https://johngrattan.com uses Google Ads for Remarketing
          </h3>
          <p>
            https://johngrattan.com uses the remarketing services to advertise
            on third party websites (including Google) to previous visitors to
            my site. It could mean that I advertise to previous visitors who
            haven't completed a task on my site, for example using the contact
            form to make an enquiry. This could be in the form of an
            advertisement on the Google search results page, or a site in the
            Google Display Network. Third-party vendors, including Google, use
            cookies to serve ads based on someone's past visits. Of course, any
            data collected will be used in accordance with my own privacy policy
            and Google's privacy policy.
          </p>
          <p>
            You can set preferences for how Google advertises to you using the
            Google Ad Preferences page, and if you want to you can opt out of
            interest-based advertising entirely by cookie settings or
            permanently using a browser plugin.
          </p>
          <h3 className="pt-5 pb-4">Aggregated Statistics</h3>
          <p>
            John Grattan SEO & Web Design may collect statistics about the
            behavior of visitors to its website. John Grattan SEO & Web Design
            may display this information publicly or provide it to others.
            However, John Grattan SEO & Web Design does not disclose your
            personally-identifying information.
          </p>
          {/* <h3 className="pt-5 pb-4">Affiliate Disclosure</h3>
          <p>
            This site uses affiliate links and does earn a commission from
            certain links. This does not affect your purchases or the price you
            may pay.
          </p> */}
          <h3 className="pt-5 pb-4">Cookies</h3>
          <p>
            To enrich and perfect your online experience, John Grattan SEO & Web
            Design uses "Cookies", similar technologies and services provided by
            others to display personalized content, appropriate advertising and
            store your preferences on your computer.
          </p>
          <p>
            A cookie is a string of information that a website stores on a
            visitor's computer, and that the visitor's browser provides to the
            website each time the visitor returns. John Grattan SEO & Web Design
            uses cookies to help John Grattan SEO & Web Design identify and
            track visitors, their usage of https://johngrattan.com, and their
            website access preferences. John Grattan SEO & Web Design visitors
            who do not wish to have cookies placed on their computers should set
            their browsers to refuse cookies before using John Grattan SEO & Web
            Design's websites, with the drawback that certain features of John
            Grattan SEO & Web Design's websites may not function properly
            without the aid of cookies.
          </p>
          <p>
            By continuing to navigate my website without changing your cookie
            settings, you hereby acknowledge and agree to John Grattan SEO & Web
            Design's use of cookies.
          </p>
          <h3 className="pt-5 pb-4">Privacy Policy Changes</h3>
          <p>
            Although most changes are likely to be minor, John Grattan SEO & Web
            Design may change its Privacy Policy from time to time, and in John
            Grattan SEO & Web Design's sole discretion. John Grattan SEO & Web
            Design encourages visitors to frequently check this page for any
            changes to its Privacy Policy. Your continued use of this site after
            any change in this Privacy Policy will constitute your acceptance of
            such change.
          </p>
          <div className="container pt-5">
            <h3 className="pt-5 pb-2 text-center">Contact Information</h3>
            <hr className="divider pb-4" />
            <p className="text-center">
              If you have any questions about this Privacy Policy, please
              contact me:
            </p>
            <div className="bg-purple border border-primary rounded p-3 width-fit-content drop-shadow-dark my-5 mx-auto">
              <Link to="/" className="text-sans-serif pt-2 d-flex mb-2">
                <i className="fas fa-address-card mt-1 text-white"></i>
                <span className="ml-3">John Grattan SEO & Web Design</span>
              </Link>
              <div className="text-sans-serif pt-2 d-flex mb-2">
                <i className="fas fa-phone mt-1 text-white"></i>
                <a className="ml-3" href="tel:+14012169868">
                  (401) 216-9868
                </a>
              </div>
              <div className="text-sans-serif pt-2 d-flex mb-2">
                <i className="fas fa-envelope mt-1 text-white"></i>
                <a
                  className="ml-3"
                  href="mailto:contact@johngrattan.com?Subject=Important%20Email%20From%20Website"
                  target="_blank"
                >
                  contact@johngrattan.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default PrivacyPage__Section;
