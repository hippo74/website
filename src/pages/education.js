import React from 'react'
import { graphql } from 'gatsby'

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
    text,
    papers
  } = props.data.markdownRemark.frontmatter

  return (
    <main>
      <header>
        { text }
      </header>
      <ul>
        {papers.map((paper, index) => {
          return (
            <li key={index}>
              <Paper {...paper} />
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Education