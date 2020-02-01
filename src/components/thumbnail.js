import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
 
import styles from './thumbnail.module.scss'

const Thumbnail = props => {

  const {
    title,
    description,
    thumbnail,
    image
  } = props

  const [show, setShow] = useState(false)
  const handleToggleShow = () => setShow(!show)

  return (
    <article className={styles['thumbnail']}>
      <img 
        className={styles['thumbnail__image']}
        src={`${(thumbnail || image)}?nf_resize=smartcrop&w=300&h=300`}
        alt={`${title} thumbnail`}
        onClick={handleToggleShow}
      />
      <CSSTransition
        in={show}
        timeout={400}
        classNames={{
          enterActive: styles['lightbox--enterActive'],
          enterDone: styles['lightbox--enterDone'],
          exitActive: styles['lightbox--exitActive']
        }}
        unmountOnExit
      >
        <div className={styles['lightbox']}>
          <figure className={styles['lightbox__content']}>
            <img 
              className={styles['lightbox__image']}
              src={`${image}?nf_resize=fit&w=1200&h=1200`}
              alt={title}
            />
            <figcaption className={styles['lightbox__text']}>
              <h2 className={styles['lightbox__title']}>
                {title}
              </h2>
              {description}
            </figcaption>
          </figure>
          <div 
            className={styles['lightbox__overlay']}
            onClick={handleToggleShow}
          />
        </div>
      </CSSTransition>
    </article>
  )
}

export default Thumbnail