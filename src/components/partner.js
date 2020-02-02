import React from 'react'
 
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
          <img src={image} alt={title} />  
        </picture>
      }
      <div className={styles['partner__text']}>
        <header className={styles['partner__header']}>
          {title}
        </header>
        {description && 
          <p className={styles['partner__description']}>
            {description}
          </p>
        }
        {url && 
          <a 
            className={styles['partner__link']}
            href={url} 
            target='_blank' rel='noopener noreferrer'
          >
            {text || title}
          </a>
        }
      </div>
    </article>
  )
}

export default Paper