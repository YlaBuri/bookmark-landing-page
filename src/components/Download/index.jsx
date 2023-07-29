import React from 'react'
import styles from './Download.module.css'
import imgBrowser1 from 'assets/images/logo-chrome.svg'
import imgBrowser2 from 'assets/images/logo-firefox.svg'
import imgBrowser3 from 'assets/images/logo-opera.svg'
import CardNavegador from 'components/CardNavegador'

export default function Download() {

  const cards = [
    {
      srcImg: imgBrowser1,
      nome: 'Chrome',
      versao: '62',
    },
    {
      srcImg: imgBrowser2,
      nome: 'Firefox',
      versao: '55',
    },
    {
      srcImg: imgBrowser3,
      nome: 'Opera',
      versao: '46',
    },
  ];

  return (
    <div className={styles.download}>
      <h2>Download the extension</h2>
      <p> We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
      
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <CardNavegador nome={card.nome} srcImg={card.srcImg} minVersion={card.versao} index={index}/>
        ))}
      </div>
    </div>
  )
}
