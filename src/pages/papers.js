import React from 'react'
import { graphql } from 'gatsby'

import Markdown from '../components/markdown'

export const query = graphql`
  query Papers {
    markdownRemark(frontmatter: { name: { eq: "papers" } } ) {
      frontmatter {
        title
      }
    }
  }
`

const Papers = (props) => {
  return <Markdown post={props.data.markdownRemark} />
}

export default Papers