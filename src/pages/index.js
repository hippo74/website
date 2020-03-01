import React from 'react'
import { graphql, Link } from 'gatsby'

import Intro from '../components/intro'
import Form from '../components/form'
import SummaryText from '../components/summary-text'

export const query = graphql`
  query Home {
    markdownRemark(frontmatter: { name: { eq: "home" } } ) {
      frontmatter {
        title
      }
    }

    education: markdownRemark(frontmatter: { name: { eq: "education" } } ) {
      frontmatter {
        papers {
          description
          file
          title
          url
        }
      }
    }
  }
`

const Home = (props) => {
  const {
    markdownRemark: {
      frontmatter: {
        title,
        text
      }
    },
    education: {
      frontmatter: {
        papers
      }
    }
  } = props.data

  console.log(papers)

  return (
    <>
      <Intro title={title} text={text} />
      <section>
        <h2>Recent Papers</h2>
        {papers.slice(0, 3).map((paper, index) => {
          return <SummaryText key={index} hLevel='3' {...paper} />
          // <Paper key={index} {...paper} />
        })}
        <Link to='/education'>Read More</Link>
      </section>
      <Form />
    </>
  )
}

export default Home