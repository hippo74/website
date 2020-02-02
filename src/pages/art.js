import React from 'react'
import { graphql } from 'gatsby'

import Thumbnail from '../components/thumbnail'

export const query = graphql`
  query Art {
    markdownRemark(frontmatter: { name: { eq: "art" } } ) {
      frontmatter {
        title
        text
        gallery {
          description
          image
          title
          thumbnail
        }
      }
    }
  }
`

const Art = props => {
  const {
    text,
    gallery
  } = props.data.markdownRemark.frontmatter

  return (
    <main>
      <header>
        { text }
      </header>
      {gallery.map((image, index) => {
        return <Thumbnail key={index} {...image} />
      })}
    </main>
  )
}

export default Art