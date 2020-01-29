module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `John Grattan SEO & Web Design`,
    description: `Hi, I'm John Grattan. I offer affordable Digital Marketing solutions such as SEO, SEM, Web Design and Web Development to small businesses in Massachusetts.`,
    author: `John Grattan`,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `john-grattan-site`,
        short_name: `john-grattan-site`,
        start_url: `/`,
        background_color: `#1a1b41`,
        theme_color: `#baff29`,
        display: `minimal-ui`,
        icon: `src/images/john-grattan-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Merriweather:400,300,300italic,400italic,700,700italic',
            'Merriweather+Sans:400,700',
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
