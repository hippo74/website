import React from 'react'
import { graphql } from 'gatsby'

import Intro from '../components/intro'
import Form from '../components/form'

export const query = graphql`
  query Home {
    markdownRemark(frontmatter: { name: { eq: "home" } } ) {
      frontmatter {
        title
      }
    }
  }
`

const Home = (props) => {
  const {
    title,
  } = props

  return (
    <>
      {/* <Intro title={title} /> */}
      <Form />
    </>
  )
}

export default Home