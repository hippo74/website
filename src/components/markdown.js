import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

const Markdown = (props) => {
  return (
    <MDXProvider>
      <article>
        <MDXRenderer>
          {props.post}
        </MDXRenderer>
      </article>
    </MDXProvider>
  )
}

export default Markdown
