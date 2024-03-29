import React from 'react'
import styles from './intro.module.css'

const Intro = () => {
  return (
    <>
      <div className={styles.intro}>
        <p className={styles.intro_title}>Alexander <br /> Arismendy</p>
        <h3>
          <p className={styles.intro_subtitle}>GIS and Web developer 
          </p>
        </h3>
      </div>
    </>
  )
}

export default Intro;