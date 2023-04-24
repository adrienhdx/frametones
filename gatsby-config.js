/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 80,
        }
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `database`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `FilmJson`, // a fixed string
      },
    }
    
  ],
}
