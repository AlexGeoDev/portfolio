import { calculateOverrideValues } from 'next/dist/server/font-utils';
import Image from 'next/image';
import React from 'react'
import styles from './presentation.module.css'

const Presentation = () => {
  return (
    <>
      <div className={styles.presentation}>
        <div className={styles.presentation_contentImage}>
          <picture>
            <source media="(min-width: 1024px)" srcSet='./images/perfil02.jpg'/>
            <source 
              media="(min-width: 768px)" 
              // width={200}
              // height={200}
              srcSet='./images/perfil_half.jpg'/>
            <Image 
            src='/images/perfil_small.jpg'
            width={250}
            height={250}
            className={styles.presentation_image}
            alt='Picture of Alexander Arismendy, frontend developer'
          />
          </picture>
        </div>
        <div className={styles.content_title}>
          {/* <h3 className={styles.content_title_h3}>Hi, I'm</h3> */}
          
          <h1 className={styles.content_title_h1}>Hi, I'm Alexander</h1>
          <br />
          {/* <h2 className={styles.content_title_h2}>Web developer and GIS developer</h2> */}
          
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