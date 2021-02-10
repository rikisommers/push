
require('dotenv').config()


module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    
    `gatsby-plugin-sass`,
//    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://pushdigital.us19.list-manage.com/subscribe/post?u=5d4a958e7dd2a8a9d1fefe111&amp;id=bd4a1ac491',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Push`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: `ff4613ab5a8941c11f0bdeba1e4d1d`,
  
        // The project environment to read from. Defaults to the primary environment:
        environment: `main`,
  
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,
  
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
  
        // Custom API base URL (most don't need this)
        // apiUrl: 'https://site-api.datocms.com',
  
        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        localeFallbacks: {
          it: ['en'],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
  
  ],
  
}
