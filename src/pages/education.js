import React from 'react'
import { graphql } from 'gatsby'

import Intro from '../components/intro'
import Paper from '../components/paper'

export const query = graphql`
  query Education {
    markdownRemark(frontmatter: { name: { eq: "education" } } ) {
      frontmatter {
        name
        title
        text
        papers {
          title
          description
          url
          file
        }
      }
    }
  }
`

const Education = props => {
  const {
    title,
    text,
    papers
  } = props.data.markdownRemark.frontmatter

  return (
    <>
      <Intro title={title} text={text} />
      {papers.map((paper, index) => {
        return <Paper key={index} {...paper} />
      })}
    </>
  )
}

export default Education