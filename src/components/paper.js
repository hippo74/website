import React from 'react'
 
import styles from './paper.module.scss'

const Paper = props => {

  const {
    title,
    description,
    url,
    file
  } = props

  return (
    <article className={styles['paper']}>
      <div className={styles['paper__files']}>
        {url && 
          <a href={url} target='_blank' rel='noopener noreferrer'>
            View Link
          </a>
        }
        {(url && file) && ' | '}
        {file && 
            <a href={file} download>
            Download PDF
          </a>
        }
      </div>
      <div className={styles['paper__text']}>
        <header className={styles['paper__header']}>
          {title}
        </header>
        {description && 
          <p className={styles['paper__description']}>
            {description}
          </p>
        }
      </div>
    </article>
  )
}

export default Paper