/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `best-party-page`,
    siteUrl: `https://bestpartypage.pl`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `best-party_page`,
        short_name: `bestParty`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `blue`,
        display: `standalone`,
        icons: [
          {
            src: `src/images/icon.png`,
            //sizes: `192x192`,
            type: `image/png`,
          },
          /* {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          }, */
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://bestpartypage.pl',
        sitemap: 'https://bestpartypage.pl/sitemap-index.xml',
        policy: [
          process.env.NODE_ENV === 'production'
          ? { userAgent: '*', allow: '/' }
            : { userAgent: '*', disallow: '/' }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
      `,
        resolveSiteUrl: ({ site: { siteMetadata: { siteUrl } } }) => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          site: { siteMetadata: { siteUrl } },
        }) => allPages.map(({ path }) => ({
          url: `${siteUrl}${path}`,
          path,
          changefreq: `daily`,
          priority: 0.7,
        })),
        serialize: ({ path }) => ({
          url: path
        }),
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.GATSBY_DATO_CMS_KEY,
      },
    },
  ]
};