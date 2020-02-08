module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
  },
  plugins: [

    // data related
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },

    // content related
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`
      }
    },

    // design related
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/_layout')
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          camelCase: false // to use BEM syntax
        }
      }
    },

    // CMS related
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        manualInit: true,
        enableIdentityWidget: false,
        modulePath: `${__dirname}/src/cms.js`
      }
    }
  ]
}
