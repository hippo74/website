import React from 'react'
import { graphql } from 'gatsby'

import Markdown from '../components/markdown'

export const query = graphql`
  query Partnerships {
    mdx(frontmatter: { name: { eq: "partnerships" } } ) {
      frontmatter {
        title
      }
      body
    }
  }
`

const Partnerships = (props) => {
  return <Markdown post={props.data.mdx.body} />
}

export default Partnerships