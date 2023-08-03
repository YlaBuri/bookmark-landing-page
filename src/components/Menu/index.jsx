import React from 'react'
import styles from './Menu.module.css'

export default function Menu() {
  return (
    <div className={styles.menu}>
        <div className={styles.options}>
            <ul className={styles.optionsLista}>
                <li><button className={styles.listaBtn}>Features</button></li>
                <li><button className={styles.listaBtn}>Pricing</button></li>
                <li><button className={styles.listaBtn}>Contact</button></li>
                <li><button className={styles.listaBtnLogin}>Login</button></li>
            </ul>
        </div>
    </div>
  )
}
