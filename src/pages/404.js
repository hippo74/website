import React from 'react'
import Intro from '../components/intro'

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
    <Intro title='Uh oh!' text="You hit a page that doesn't exist." />
    <h1></h1>
  </>
)

export default NotFoundPage
