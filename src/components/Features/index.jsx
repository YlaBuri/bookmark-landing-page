import React from 'react'
import styles from './Features.module.css'
import Tab from 'components/Tab'

export default function Feature() {
  return (
    <div className={styles.feature}>
        <h2 className={styles.titulo}>Features</h2>
        <p className={styles.paragrafo}>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>

        <div className={styles.tab}>
            <Tab/>
        </div>
    </div>
  )
}
