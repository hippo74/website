import React from 'react'
import { graphql } from 'gatsby'

import Markdown from '../components/markdown'

export const query = graphql`
  query Work {
    mdx(frontmatter: { name: { eq: "work" } } ) {
      frontmatter {
        title
      }
      body
    }
  }
`

const Work = (props) => {
  return <Markdown post={props.data.mdx.body} />
}

export default Work