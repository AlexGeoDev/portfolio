import React from 'react'
import styles from './about.module.css'

const About = () => {
  return (
    <>
      <section className={styles.about}>
        <h2 className={styles.title}>About me</h2>
        <div>      
          <p>I studied Engineer Cadastral and Geodesy at University Distrital in Bogota, Colombia.</p>
          <br />
          <p>When I  was in last semesters, I learned software development and I liked very much. After that
            , I took the decisition and focused on web develop mixing it with Geographic Information System (GIS).
          </p>
          <br />
          <p>You can find my in  content on youtube and github as Alexgeodev</p>
        </div>
      </section>
    </>
  )
}

export default About