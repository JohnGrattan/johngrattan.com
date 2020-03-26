const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://johngrattan.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `John Grattan SEO & Web Design`,
    description: `John Grattan SEO & Web Design offers affordable Digital Marketing services such as SEO, SEM, Web Design and Web Development to small businesses in Massachusetts.`,
    author: `John Grattan`,
    image: 'https://johngrattan.com/images/john-grattan-circle-headshot.jpg',
    siteUrl,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://johngrattan.us19.list-manage.com/subscribe/post?u=15d6d54f80db22fad48ed30c5&amp;id=d5ba0314c8',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PFKLK3Q',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        // gtmAuth: 'JG_GTM_ENV_AUTH_STRING',
        // gtmPreview: 'JG_GTM_ENV_PREVIEW',
        // dataLayerName: 'JG_GTM_DATA_LAYER',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-157734045-1',
      },
    },
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
