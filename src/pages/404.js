import React from 'react'

import { graphql } from 'gatsby'

export const query = graphql`
  query NotFoundPage {
    markdownRemark(frontmatter: { name: { eq: "404" } } ) {
      frontmatter {
        title
      }
    }
  }
`

const NotFoundPage = () => (
  <>
    <h1>Uh oh!</h1>
    <p>You hit a page that doesn't exist.</p>
  </>
)

export default NotFoundPage
