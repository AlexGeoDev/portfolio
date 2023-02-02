import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <>
      <footer className={styles.futer}>
        <header className={styles.futer_title}>
          <h2 className={styles.futer_titleColor}>Contact</h2>
        </header>
        <div className={styles.futer_mailLocation}>
          <div className={styles.futer_mailText}>
            <p>Please, write to my email: </p>
            <div className={styles.futer_mail}>
              <Image 
                src='/images/email.png'
                width={50 / 2}
                height={50 /2}
                alt='email icon'
              />
              jaabec@gmail.com
          </div>
          </div>
          <div className={styles.futer_location}>
            <Image
              src='/images/location.png'
              width={50 / 2}
              height={50 / 2}
              alt='icono de ubicacion tomado de "https://icons8.com/icon/7891/geo-cerca"'
            />
            Bogota, Colombia
          </div>
        </div>
        <div className={styles.futer_media}>
          <p className={styles.futer_iconsText}>Or you can contac me in: </p>
          <ul className={styles.futer_icons}>
            <li>
              <Link 
                href='https://www.linkedin.com/in/alexgeodev/'
                target='_blank'
              >
              <Image 
                  src={'/images/linkedin.svg'}
                  width={35}
                  height={35}
                  alt=''
                />
              </Link>
            </li>
            <li>
              <Link 
                href='https://wa.link/iw4aoe'
                target='_blank'
              >
              <Image 
                  src={'/images/whatsapp.svg'}
                  width={35}
                  height={35}
                  alt=''
                />
              </Link>
            </li>
            <li>
              <Link 
                href='https://github.com/AlexGeoDev'
                target='_blank'
              >
              <Image 
                  src={'/images/github.svg'}
                  width={55}
                  height={55}
                  alt=''
                />
              </Link>
            </li>
            <li>
              <Link 
                href='https://t.me/alexgeodev'
                target='_blank'
              >
              <Image 
                  src={'/images/telegram.svg'}
                  width={50}
                  height={50}
                  alt=''
                />
              </Link>
            </li>
            <li>
              <Link 
                href='https://www.youtube.com/@alexgeodev'
                target='_blank'  
              >
                <Image 
                  src={'/images/youtube.svg'}
                  width={45}
                  height={45}
                  alt=''
                />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer