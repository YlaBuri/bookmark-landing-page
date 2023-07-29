import React from 'react'
import styles from './Inicio.module.css'
import Header from 'components/Header'
import Principal from 'components/Principal'
import Feature from 'components/Features'
export default function Inicio() {
  return (
    <div className={styles.content}>
        <Header/>
        <Principal/>
        <Feature/>
    </div>
  )
}
