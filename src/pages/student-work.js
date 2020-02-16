import React from 'react'
import { graphql } from 'gatsby'

import Intro from '../components/intro'
import Thumbnail from '../components/thumbnail'

export const query = graphql`
  query StudentWork {
    markdownRemark(frontmatter: { name: { eq: "student-work" } } ) {
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

const StudentWork = props => {
  const {
    title,
    text,
    gallery
  } = props.data.markdownRemark.frontmatter

  return (
    <>
      <h1>{title}</h1>
      <Intro text={text} />
      {gallery.map((image, index) => {
        return <Thumbnail key={index} {...image} />
      })}
    </>
  )
}

export default StudentWork