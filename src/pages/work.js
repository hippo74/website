import React from 'react'
import { graphql } from 'gatsby'

import Thumbnail from '../components/thumbnail'

export const query = graphql`
  query Work {
    markdownRemark(frontmatter: { name: { eq: "work" } } ) {
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

const Work = props => {
  const { frontmatter } = props.data.markdownRemark
  const {
    text,
    gallery
  } = frontmatter

  return (
    <main>
      <header>
        { text }
      </header>
      <ul>
        {gallery.map((image, index) => {
          return (
            <li key={index}>
              <Thumbnail {...image} />
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Work