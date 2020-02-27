import React from 'react'

import styles from './intro.module.scss'

const Intro = (props) => {
  const {
    title,
    text
  } = props

  const paragraphs = text ? text.split('\n').filter(p => p !== '') : []

  return (
    <section className={styles.text}>
      <h1 className={styles.header}>
        {title}
      </h1>
      {paragraphs.map((p, index) => (
        <p 
          key={index}
          dangerouslySetInnerHTML={{ __html:p }}
        />   
      ))}
    </section>
  )
}

export default Intro
