import React from 'react'
import styles from './Principal.module.css'
import imagem from 'assets/images/illustration-hero.svg'

export default function Principal() {
  return (
    <div className={styles.principal}>
      <div className={styles.texto}>
        <h1>A simple Bookmark Manager</h1>
        <p>A clean and simple interface to organize your favourite wevsites. Open a new browser tab and see your load instantity. Try it for free.</p>
        <div className={styles.buttonGroup}>
          <button className={styles.btn}>Get it on Chrome</button>
          <button className={`${styles.btn} ${styles.btn2}`}>Get it on Firefox</button>
        </div>
      </div>
      <div className={styles.imagem}>
          <img src={imagem} alt='Tablet'/>
          <div class={styles.backgroundSvg}></div>
      </div>
      
    </div>
  )
}
