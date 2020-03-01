import React from 'react'
import cx from 'classnames'

import styles from './summary-text.module.scss'

const SummaryText = props => {

  const {
    hLevel,
    className,
    title,
    description,
    url,
    text
  } = props

  const Header = props => {
    const Element = `h${hLevel}` || 'h2'
    return <Element className={props.className}>{props.children}</Element>
  }

  return (
    <div className={cx(
      className,
      styles['summary']
    )}>
        <Header className={styles['summary__header']}>
          {title}
        </Header>
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