import Link from 'next/link'
import React from 'react'
import styles from './button.module.css'

function Button({textButton, urlProject}:any) {
    
  return (
    <>
      <button className={styles.button}>
        <Link 
          href={urlProject}
          target='_blank'
          className={styles.button_span}
          >
          <span>
            {textButton}
          </span>
        </Link>
      </button>
    </>
  )
}

export default Button