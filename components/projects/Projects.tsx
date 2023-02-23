import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './projects.module.css'
import Button from '../button/Button'
import Card from './Card'

const Projects = () => {
  
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      <h2 className={styles.subtitle_projects}>Projects</h2>
      <div className={styles.container_projects}>
        <div className={styles.projects}>
          <div>
            <img 
              className={styles.image_projects}
              onClick={() => setShowDescription(!showDescription)}
              src="https://res.cloudinary.com/dw3tnuvyb/image/upload/c_scale,w_337/v1677115364/yosduit_d9hrgx.webp" 
              alt="Imagen del proyecto Yos Duit" 
            />
            <div>
              <div className={showDescription ? "show-element" : null}>
              {showDescription && (
                <section className={styles.text_card}>
                  <h3>Yos Duit</h3>
                  <p className={styles.resume_project}>
                    is a minimal web app for create and manage tasks for 
                    improve our productivity and save time.
                    <br />
                    The user doesn't need to create a count, all data is save in 
                    local storage of device where app is used. The data of every user ir property
                    only of its creator.
                    <br />
                    It doesn't matter if the user close the web, restart the divice, the data is 
                    going to keep storage  in user's device.
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
                  <div className={styles.button_info}>             
                    <Button 
                      textButton="Ver"
                      urlProject="https://alexgeodev.github.io/geo-app/"
                    />
                  </div>
                </section>
              )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projects}>
          <div>
            <img 
              className={styles.image_projects}
              onClick={() => setShowDescription(!showDescription)}
              src="https://res.cloudinary.com/dw3tnuvyb/image/upload/c_scale,w_337/v1677123354/guitarritacol_ovvosn.webp" 
              alt="Imagen del portafolio de Carlos Jimenez"
            />
            <div>
              <div className={showDescription ? "show-element" : null}>
              {showDescription && (
                <section className={styles.text_card}>
                  <h3>Carlos Jimenez's Portfolio</h3>
                  <p className={styles.resume_project}>
                    is a portfolio of colombian guitarist, researcher and 
                    composer based in Germany, also a kindermusic teacher
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
                  <div className={styles.button_info}>             
                    <Button 
                      textButton="Ver"
                      urlProject="https://guitarritacol.vercel.app/"
                    />
                  </div>
                </section>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Card 
        urlImage="https://res.cloudinary.com/dw3tnuvyb/image/upload/c_scale,w_337/v1677115364/yosduit_d9hrgx.webp"
        setShowDescription={setShowDescription}
        showDescription={showDescription}
        briefDescription="Mega Carretazo"
      /> */}
    </>
  )
}

export default Projects;