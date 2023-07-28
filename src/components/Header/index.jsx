import React from 'react'
import styles from './Header.module.css'
import logoSvg from 'assets/images/logo-bookmark.svg'


export default function Header() {
  return (
    <header className={styles.head}>
      
      <div className={styles.logo}>
        <img src={logoSvg} alt='Logo'/>
      </div>

      <div className={styles.options}>
          <ul className={styles.optionsLista}>
            <li><button className={styles.listaBtn}>Features</button></li>
            <li><button className={styles.listaBtn}>Pricing</button></li>
            <li><button className={styles.listaBtn}>Contact</button></li>
            <li><button className={styles.listaBtnLogin}>Login</button></li>
          </ul>
      </div>
    </header>
  )
}
