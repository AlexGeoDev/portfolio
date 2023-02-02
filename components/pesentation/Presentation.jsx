import Image from 'next/image';
import React from 'react'
import styles from './presentation.module.css'

const Presentation = () => {
  return (
    <>
      <div className={styles.presentation}>
        <div className={styles.presentation_contentImage}>
          <picture>
            <Image 
            src='/images/perfil02.jpg'
            width={1433 / 5}
            height={1433 / 5}
            className={styles.presentation_image}
            alt='Picture of Alexander Arismendy, frontend developer'
          />
          </picture>
        </div>
        <div className={styles.content_title}>
          <h3 className={styles.content_title_h3}>Hi, I'm</h3>
          <br />
          <h1 className={styles.content_title_h1}>Alexander</h1>
          <br />
          <h2 className={styles.content_title_h2}>GIS and web developer</h2>
          
          <br />    
          <p className={styles.description}>I’m a <b className={styles.color_devweb}>Front-end 
            web developer</b> and <b className={styles.color_devgis}>
            Geographic Information System 
            (GIS) developer</b> specializing in building exceptional digital experiences. 
          </p>
        </div>
      </div>
    </>
  )
}

export default Presentation;