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
          <p className={styles.description}>I studied Engineer Cadastral and Geodesy 
          at Distrital University in Bogota, Colombia.</p>
          <p className={styles.description}>When I  was in last year of university, I learned 
          software development and I liked very much. After that,  I decided to focus on web 
          development and combine it with Geographic Information System.
          </p>
          <p className={styles.description}>You can find my content and tutorials on YouTube 
          and GitHub under the username Alexgeodev.</p>
        </div>
      </div>
    </section>
  )
}

export default Presentation;