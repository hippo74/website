import React from 'react'
import { graphql } from 'gatsby'

import Markdown from '../components/markdown'

export const query = graphql`
  query Papers {
    mdx(frontmatter: { name: { eq: "papers" } } ) {
      frontmatter {
        title
      }
      body
    }
  }
`

const Papers = (props) => {
  return <Markdown post={props.data.mdx.body} />
}

export default Papers