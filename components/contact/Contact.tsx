import React from 'react';
import styles from './contact.module.css';
import Image from 'next/image'
import Link from 'next/link';

const Contact = () => {
  return (
    <>
      <section className={styles.contact}>     
        <div className={styles.title_contact}>
          <h2 className={styles.title}>Contact to me</h2>
        </div>
        <p>Please, write me to my mail: <b>jaabec@gmail.com</b></p>
        <br />
        <p>Or you can contact me in:</p>
        <div className={styles.contact_logos}>
        <Link 
          href={'https://github.com/AlexGeoDev/portfolio'} 
          target={'_blank'}>

          <Image 
            src='/images/github_logo.png'
            width={65}
            height={65}
            alt='logo de github'
            />          
        </Link>

        <Link 
          href={'https://walink.co/66f47f'}
          target={'_blank'}>
          <Image 
            src={'/images/uasap.png'}
            width={120}
            height={73}
            alt='logo de whatsapp'
            />
        </Link>
        </div>
        
        
      </section>       
    </>
  )
}

export default Contact