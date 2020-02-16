import React from 'react'

import SummaryText from './summary-text'
 
import styles from './partner.module.scss'

const Paper = props => {

  const {
    title,
    description,
    image,
    url,
    text
  } = props

  return (
    <article className={styles['partner']}>
      {image && 
        <picture className={styles['partner__image']}>
          <img src={`${image}?nf_resize=smartcrop&w=600&h=600`} alt={title} />  
        </picture>
      }
      {/* TODO load images at size better here */}
      <SummaryText className={styles['partner__text']} {...props} />
    </article>
  )
}

export default Paper