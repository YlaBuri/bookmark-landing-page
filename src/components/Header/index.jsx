import React, {useState} from 'react'
import styles from './Header.module.css'
import logoSvg from 'assets/images/logo-bookmark.svg'
import logoBrancoSvg from 'assets/images/logo-bookmark-branco.svg'
import { ReactComponent as ImgMenu } from 'assets/images/icon-hamburger.svg'
import { ReactComponent as ImgFechar } from 'assets/images/icon-close.svg'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    console.log(menuOpen)
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.head}>
      
      <div className={styles.logo} >
        <img src={logoSvg} alt='Logo' />
      </div>

      <div className={styles.menu}>
         <button onClick={handleMenuClick} className={styles.btnMenu}><ImgMenu/></button>
      </div>


      {menuOpen && (
        <div className={styles.menuContainer}>
          <div className={styles.menuContainerLogo}>
            <img src={logoBrancoSvg} alt='Logo'/>
            <button onClick={handleMenuClick} className={styles.btnMenu}><ImgFechar/></button>
          </div>

          <ul className={styles.menuContainerOptionsLista}>
            <hr />
                <li><button className={styles.listaBtn}>Features</button></li>
            <hr />
                <li><button className={styles.listaBtn}>Pricing</button></li>
            <hr />
                <li><button className={styles.listaBtn}>Contact</button></li>
            <hr />
                <li><button className={`${styles.listaBtn} ${styles.menuContainerOptionsListaBtnLogin}`}>Login</button></li>
          </ul>
       </div>
      )}
      

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
