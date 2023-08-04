import React, { useState } from 'react'
import styles from './Contact.module.css'
import { ReactComponent as IconErro } from 'assets/images/icon-error.svg'
export default function Contact() {

  const [email, setEmail] = useState('');
  const [erroEmail, setErroEmail] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const emailIsValid = () => {
    // Implemente a validação de e-mail adequada aqui, por exemplo, usando uma expressão regular
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
      setErroEmail("Whoops, make sure it's an email?");
    } else {
      setErroEmail('');
    }
  };

  return (
    <div className={styles.contact}>
        <p>35.000 + already joined</p>
        <h2>Stay up-to-date with what we're doing</h2>

        <form action="">
          <div className={erroEmail !== '' ? `${styles.invalid}` : `${styles.campo} `  }>
            
            <div className={styles.campoInput}>
              <input type='email' id="email" value={email}  onChange={handleChangeEmail} onBlur={emailIsValid} />
              {erroEmail && <IconErro className={styles.icon}/>}

            </div>
            
            {erroEmail && <label>{erroEmail}</label>}
          </div>
          <button className={styles.btn}>Contact Us</button>
        </form>
    </div>
  )
}
