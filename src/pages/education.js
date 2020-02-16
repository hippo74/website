import React from 'react'
import { graphql } from 'gatsby'

import Intro from '../components/intro'
import Paper from '../components/paper'

export const query = graphql`
  query Education {
    markdownRemark(frontmatter: { name: { eq: "education" } } ) {
      frontmatter {
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
      <h1>{title}</h1>
      <Intro text={text} />
      {papers.map((paper, index) => {
        return <Paper key={index} {...paper} />
      })}
    </>
  )
}

export default Education