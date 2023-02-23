import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './projects.module.css'
import Button from '../button/Button'

const Projects = () => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <>
      <h2 className={styles.h2}>Projects</h2>  
      <div className={styles.projects}>
        
        <Image 
          className={styles.image_project}
          onClick={() => setShowDescription(!showDescription)}
          src='/images/YosDuit.png'
          width={265}
          height={284}
          alt={'Image of first project created with react.js'}
        />

        <div>
          <p>{showDescription}</p> 
          <div className={showDescription ? "show-element" : null}>
          {showDescription && (
            <section className={styles.text_card}>
              <h3>Yos Duit</h3>
              <p className={styles.resume_project}>
                is a minimal web app for create and manage tasks for improve our productivity and save time.
              </p>
              <div className={styles.projects_languages}>
                <div>
                  <img 
                    src="https://res.cloudinary.com/dw3tnuvyb/image/upload/c_scale,h_44,w_44/v1677099649/HTML5_kt8o0b.webp" 
                    alt="html logo"
                  />
                </div>
                <div className={styles.projects_languages__x}>
                  <Image 
                    className={styles.react_logo}
                    src='/images/logo192.png'
                    width={192 / 4.4}
                    height={192 / 4.4}
                    alt={'Logo react'}
                  />
                </div>
                <div>
                  <img 
                    src="https://res.cloudinary.com/dw3tnuvyb/image/upload/c_scale,h_44,w_31/v1677109168/CSS3_logo_ucguto.webp"
                   alt="logo CSS"
                  />
                </div>
              </div>
              <div>
                <Button />
              </div>
            </section>

            // <Link 
            //   target={'_blank'}
            //   className={styles.projects_link}        
            //   href={'https://alexgeodev.github.io/geo-app/'}>
            //     <ul className={styles.projects_ul}>
            //       <br />
            //       <li><b>Yos Duit</b> is a minimal web app for create and manage tasks for 
            //         improve our productivity and save time.</li>
            //       <li>The user doesn't need to create a count, all data is save in 
            //         local storage of device where app is used. The data of every user ir property
            //         only of its creator.
            //       </li>
            //       <li>It doesn't matter if the user close the web, restart the divice, the data is 
            //         going to keep storage  in user's device.</li>
            //     </ul>          
            // </Link>
          )}
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Projects;