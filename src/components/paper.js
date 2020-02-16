import React from 'react'
 
import styles from './paper.module.scss'
import SummaryText from './summary-text'
import PaperIcon from '../../static/images/paper.svg'

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
        <div className={styles['paper__links']}>
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
        <PaperIcon />
      </div>
      <SummaryText className={styles['paper__text']} {...props} url={null} />
    </article>
  )
}

export default Paper