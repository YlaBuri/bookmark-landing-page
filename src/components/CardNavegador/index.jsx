import React from 'react'
import styles from './CardNavegador.module.css'
import dots from 'assets/images/bg-dots.svg'

export default function CardNavegador({nome, srcImg, minVersion, index, classNameCard}) {
  return (
    // style={{ marginTop: `${index * 30}px` }}

    //`${styles.card} ${classNameCard}`
    <div  className={`${styles['card']} ${styles[classNameCard]}`}  >
        

        <img className={styles.imgLogo} src={srcImg} alt={`Logo do navegador ${nome}`}/>
        <label className={styles.text1}>Add to {nome}</label>
        <label className={styles.text2}>Minimun Version {minVersion}</label>
        <br/>
        <img src={dots} alt='pontos'/>
        <br/>
        <button>Add & Install Extension</button>
    </div>

    
  )
}
