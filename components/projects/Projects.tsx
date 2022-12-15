import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from './projects.module.css'

const Projects = () => {
  return (
    <>
      <h2 className={styles.h2}>Projects</h2>   
      <div className={styles.projects}>
        
        <Image 
          className={styles.image_project}
          src='/images/YosDuit.png'
          width={265}
          height={284}
          alt={'Image of first project created with react.js'}
        
        />
        <Link 
          target={'_blank'}
          className={styles.projects_link}        
          href={'https://alexgeodev.github.io/geo-app/'}>
            <ul className={styles.projects_ul}>
              <br />
              <li><b>Yos Duit</b> is a minimal web app for create and manage tasks for 
                improve our productivity and save time.</li>
              <li>The user doesn't need to create a count, all data is save in 
                local storage of device where app is used. The data of every user ir property
                only of its creator.
              </li>
              <li>It doesn't matter if the user close the web, restart the divice, the data is 
                going to keep storage  in user's device.</li>
            </ul>
          
        </Link>
      </div>
    </>
  )
}

export default Projects;