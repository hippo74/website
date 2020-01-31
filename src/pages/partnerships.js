import React from 'react'
import { graphql } from 'gatsby'

import Markdown from '../components/markdown'

export const query = graphql`
  query Partnerships {
    markdownRemark(frontmatter: { name: { eq: "partnerships" } } ) {
      frontmatter {
        title
      }
    }
  }
`

const Partnerships = (props) => {
  return <Markdown post={props.data.markdownRemark} />
}

export default Partnerships