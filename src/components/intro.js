import React from 'react'

import styles from './intro.module.scss'

const Intro = (props) => {
  const paragraphs = props.text.split('\n').filter(p => p !== '')
  return (
    <section className={styles.text}>
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
