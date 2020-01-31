module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
  },
  plugins: [

    // data related
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
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
        defaultLayouts: {
          content: require.resolve('./src/components/markdown.js')
        }
        // gatsbyRemarkPlugins: [],
      }
    },

    // design related
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/_layout')
      }
    },

    // CMS related
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        manualInit: true,
        enableIdentityWidget: true,
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    }
  ],
}
