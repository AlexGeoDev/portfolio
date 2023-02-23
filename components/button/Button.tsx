import React from 'react'
import styles from './button.module.css'

const Button = () => {
  return (
    <>
      <button className={styles.button}>
        <span className={styles.button_span}>ver</span>
      </button>
    </>
  )
}

export default Button