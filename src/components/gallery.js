import React from 'react'
import Thumbnail from './thumbnail'
 
import styles from './gallery.module.scss'

const Gallery = props => {

  const {
    gallery
  } = props

  return (
    <section className={styles['gallery']}>
      {gallery.map((image, index) => {
        return <Thumbnail key={index} {...image} />
      })}
    </section>
  )
}

export default Gallery