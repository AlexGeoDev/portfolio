import { calculateOverrideValues } from 'next/dist/server/font-utils';
import Image from 'next/image';
import React from 'react'
import styles from './presentation.module.css'

const Presentation = () => {
  return (
    <section className={styles.presentation_container}>
      <h1 className={styles.content_title_h1}>About me</h1>
      <div className={styles.presentation}>
        <div className={styles.presentation_contentImage}>
          <picture>
            <source media="(min-width: 1024px)" srcSet='./images/perfil02.jpg'/>
            <source 
              media="(min-width: 768px)"
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
          <p className={styles.description}>I’m a front-end web developer and 
            Geographic Information System (GIS) developer specialized on 
            build exceptional digital experiences. 
          </p>
          <p className={styles.description}>I studied Engineer Cadastral and Geodesy at University Distrital in Bogota, Colombia.</p>
          <p className={styles.description}>When I  was in last semesters, I learned software development and I liked very much. After that
            , I took the decisition and focused on web develop mixing it with Geographic Information System (GIS).
          </p>
          <p className={styles.description}>You can find my in  content on youtube and github as Alexgeodev</p>
        </div>
      </div>
    </section>
  )
}

export default Presentation;