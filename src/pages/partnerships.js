import React from 'react'
import { graphql } from 'gatsby'

import Partner from '../components/partner'

export const query = graphql`
  query Papers {
    markdownRemark(frontmatter: { name: { eq: "partnerships" } } ) {
      frontmatter {
        title
        text
        partnerships {
          title
          description
          image
          url
        }
      }
    }
  }
`

const Partnerships = (props) => {
  const {
    text,
    partnerships
  } = props.data.markdownRemark.frontmatter

  return (
    <main>
      <header>
        { text }
      </header>
      {partnerships.map((partner, index) => {
        return <Partner {...partner} key={index} />
      })}
    </main>
  )
}

export default Partnerships