import React from 'react'
import styles from './Inicio.module.css'
import Header from 'components/Header'
import Principal from 'components/Principal'
export default function Inicio() {
  return (
    <div className={styles.content}>
        <Header/>
        <Principal/>
    </div>
  )
}
