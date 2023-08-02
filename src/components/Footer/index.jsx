import React from 'react'
import styles from './Footer.module.css'
import logoSvg from 'assets/images/logo-bookmark-fundo-branco.svg'


export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.contentFooter}>
            
            <div className={styles.options}>

              <img src={logoSvg} alt='Logo'/>

              <ul className={styles.optionsLista}>
                  <li><button className={styles.listaBtn}>Features</button></li>
                  <li><button className={styles.listaBtn}>Pricing</button></li>
                  <li><button className={styles.listaBtn}>Contact</button></li>
              </ul>
            </div>

            <div className={styles.redesSociais}>
                <div className={styles.logoF}></div>
                <div className={styles.logoT}></div>
            </div>
        </div>

    </footer>
  )
}
