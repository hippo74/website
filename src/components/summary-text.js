import React from 'react'
import cx from 'classnames'

import styles from './summary-text.module.scss'

const SummaryText = props => {

  const {
    className,
    title,
    description,
    url,
    text
  } = props

  return (
    <div className={cx(
      className,
      styles['summary']
    )}>
        <h2 className={styles['summary__header']}>
          {title}
        </h2>
        {description && 
          <p className={styles['summary__description']}>
            {description}
          </p>
        }
        {url && 
          <a 
            className={styles['summary__link']}
            href={url} 
            target='_blank' rel='noopener noreferrer'
          >
            {text || title}
          </a>
        }
      </div>
  )
}

export default SummaryText