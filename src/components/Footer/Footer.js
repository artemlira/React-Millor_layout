import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
// import { MillorContext } from './../Context';


export default function Footer() {
  // const data = useContext(MillorContext);
  return (
    <section className={styles.footer}>
      <div className='container'>
        <div className={styles.container}>
          <div className="logo">
            <Link to="/"> <img src={logo} alt="logo Millor" /></Link>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link
                  // onClick={data.scrollToHandler()}
                  to="/catalog"
                >Каталог товаров</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/blog">Блог</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/contacts">Контакты</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}



