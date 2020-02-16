import React from 'react'
import { graphql } from 'gatsby'

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
  return (
    <>
      <form 
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" /> 
        
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
        
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="6" />

        <button type="submit">
          Send
        </button>
      </form>
    </>
  )
}

export default Home