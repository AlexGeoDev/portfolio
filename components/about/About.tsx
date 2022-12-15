import React from 'react'
import styles from './about.module.css'

const About = () => {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.title_about}>
          <h2 className={styles.title}>About me</h2>
        </div>
        <p>I studied Engineer Cadastral and Geodesy at University Distrital in Bogota, Colombia.</p>
        <br />
        <p>When I  was in last semesters, I learned programming and I liked very much, I decided
          focused me in web develop mixing it with Geographic Information System (GIS).
        </p>
      </section>      
    </>
  )
}

export default About