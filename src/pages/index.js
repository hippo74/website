import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  query Home {
    markdownRemark(frontmatter: { name: { eq: "home" } } ) {
      frontmatter {
        title
      }
    }
  }
`

const Home = (props) => {
  return ('test')
}

export default Home