import React from 'react'
import { graphql } from 'gatsby'

import Markdown from '../components/markdown'

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
  return <Markdown post={props.data.markdownRemark} />
}

export default Home