import React from 'react'
import styles from './CardNavegador.module.css'
import dots from 'assets/images/bg-dots.svg'

export default function CardNavegador({nome, srcImg, minVersion, index}) {
  return (
    <div className={styles.card}  style={{ marginTop: `${index * 30}px` }}>
        <img src={srcImg} alt={`Logo do navegador ${nome}`}/>
        <label className={styles.text1}>Add to {nome}</label>
        <label className={styles.text2}>Minimun Version {minVersion}</label>
        <br/>
        <img src={dots} alt='pontos'/>
        <br/>
        <button>Add & Install Extension</button>
    </div>
  )
}
