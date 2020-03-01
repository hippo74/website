import React from 'react'
import cx from 'classnames'

import styles from './intro.module.scss'

const Intro = (props) => {
  const {
    title,
    text,
    image = null
  } = props

  const paragraphs = text ? text.split('\n').filter(p => p !== '') : []

  return (
    <section className={cx(
      styles['text'],
      image && styles['text--with-image']
    )}>
      <h1 className={styles.header}>
        {title}
      </h1>
      {paragraphs.map((p, index) => (
        <p 
          key={index}
          dangerouslySetInnerHTML={{ __html:p }}
        />
      ))}
      {image && 
        <img src={image} alt={title} />
      }
    </section>
  )
}

export default Intro
