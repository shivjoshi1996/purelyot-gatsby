/* eslint-disable */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.purelyot.com',
    title: 'Purely OT',
    titleTemplate: 'Purely OT | Private Occupational Therapy services in Vancouver',
    description: 'Occupational Therapy services within the Greater Vancouver area, including home & work assessments, return to work, brain injury, PGAP, and chronic pain.',
    keywords: 'Occupational Therapy, Vancouver OT, Health Services',
    image: '/src/images/favicon.png',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`],
        display: 'swap',
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 100,
      }
    },
  ],
};
