import React from 'react'


import styles from './TabContent.module.css'
export default function TabContent({srcImg,altImg, titulo, descricao}) {
  return (
    <div>
        <div className={styles.content}>
            <div className={styles.containerImg}>
                <img src={srcImg} alt={altImg}/>
            </div>

            <div className={styles.texto}>
                <h2>{titulo}</h2>
                <p>{descricao}</p>
                <button>More Info</button>
            </div>
        </div>
    </div>
  )
}
