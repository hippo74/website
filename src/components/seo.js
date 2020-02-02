import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = (props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const { 
    siteMetadata: {
      // rename title to siteTitle
      title: siteTitle,
    }
   } = site

  const { 
    frontmatter: {
      // rename title to pageTitle
      title: pageTitle,
    } = { title: 'Page Not Found' }, // set a default for the 404 page
  } = props

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={pageTitle ? `${siteTitle} | ${pageTitle}` : siteTitle}
    />
  )
}

export default SEO
