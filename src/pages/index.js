import React from 'react'
import { graphql, Link, navigate } from 'gatsby'
import cx from 'classnames'

import Intro from '../components/intro'
import Form from '../components/form'
import SummaryText from '../components/summary-text'
import Thumbnail from '../components/thumbnail'
import Button from '../components/button'

export const query = graphql`
  query Home {
    markdownRemark(frontmatter: { name: { eq: "home" } } ) {
      frontmatter {
        name
        title
        text
        image
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

    art: markdownRemark(frontmatter: { name: { eq: "art" } } ) {
      frontmatter {
        gallery {
          description
          image
          title
          thumbnail
        }
      }
    }

    studentWork: markdownRemark(frontmatter: { name: { eq: "student-work" } } ) {
      frontmatter {
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

const Home = (props) => {
  const {
    data: {
      markdownRemark: {
        frontmatter: {
          title,
          text,
          image
        }
      },
      education: {
        frontmatter: {
          papers
        }
      },
      art: {
        frontmatter: {
          gallery: personalGallery
        }
      },
      studentWork: {
        frontmatter: {
          gallery: studentGallery
        }
      }
    },
    styles
  } = props

  return (
    <>
      <Intro
        className={styles['intro']}
        title={title}
        text={text}
        image={image}
      />

      <section className={styles['papers']}>
        <h2 className={styles['header']}>
          <Link to='/education'>Recent Papers</Link>
        </h2>
        {papers.slice(0, 3).map((paper, index) => {
          return <SummaryText key={index} hLevel='3' {...paper} text={'View Link'} />
        })}
        <Button onClick={() => navigate('/education')}>Read More Papers</Button>
      </section>

      <section 
        className={cx(
          styles['art'],
          styles['art--personal']
        )}
      >
        <h2 className={styles['header']}>
          <Link to='/art'>Personal Work</Link>
        </h2>
        <section>
          {personalGallery.slice(0, 4).map((image, index) => {
            return <Thumbnail key={index} {...image} />
          })}
        </section>
        <Button onClick={() => navigate('/art')}>See More Artwork</Button>
      </section>

      <section 
        className={cx(
          styles['art'],
          styles['art--students']
        )}
      >
        <h2 className={styles['header']}>
          <Link to='/student-work'>Student Work</Link>
        </h2>
        <section>
          {studentGallery.slice(0, 4).map((image, index) => {
            return <Thumbnail key={index} {...image} />
          })}
        </section>
        <Button onClick={() => navigate('/student-work')}>See More Student Work</Button>
      </section>

      <section className={styles['form']}>
        <h2 className={styles['header']}>Contact Me</h2>
        <Form />
      </section>
    </>
  )
}

export default Home