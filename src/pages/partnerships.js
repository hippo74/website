import React from 'react'
import { graphql } from 'gatsby'

import Intro from '../components/intro'
import Partner from '../components/partner'

export const query = graphql`
  query Papers {
    markdownRemark(frontmatter: { name: { eq: "partnerships" } } ) {
      frontmatter {
        name
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
    title,
    text,
    partnerships
  } = props.data.markdownRemark.frontmatter

  return (
    <>
      
      <Intro title={title} text={text} />
      {partnerships.map((partner, index) => {
        return <Partner {...partner} key={index} />
      })}
    </>
  )
}

export default Partnerships