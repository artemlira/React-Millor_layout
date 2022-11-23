import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';


export default function Footer() {
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
                <a href="/#catalog">Каталог товаров</a>
                {/* <Link to="/">Каталог товаров</Link> */}
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



