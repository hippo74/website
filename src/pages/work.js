import React from 'react'
import { graphql } from 'gatsby'

import Markdown from '../components/markdown'

export const query = graphql`
  query Work {
    markdownRemark(frontmatter: { name: { eq: "work" } } ) {
      frontmatter {
        title
      }
    }
  }
`

const Work = (props) => {
  console.log(props)
  return <Markdown post={props.data.markdownRemark} />
}

export default Work