import React from 'react'
import { graphql } from 'gatsby'

import Intro from '../components/intro'
import Gallery from '../components/gallery'

export const query = graphql`
  query Art {
    markdownRemark(frontmatter: { name: { eq: "art" } } ) {
      frontmatter {
        name
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
    title,
    text,
    gallery
  } = props.data.markdownRemark.frontmatter

  return (
    <>
      <Intro title={title} text={text} />
      <Gallery gallery={gallery} />
    </>
  )
}

export default Art