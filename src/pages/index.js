import React from 'react'
import { graphql } from 'gatsby'

import Markdown from '../components/markdown'

export const query = graphql`
  query Home {
    mdx(frontmatter: { name: { eq: "home" } } ) {
      frontmatter {
        title
      }
      body
    }
  }
`

const Home = (props) => {
  return <Markdown post={props.data.mdx.body} />
}

export default Home