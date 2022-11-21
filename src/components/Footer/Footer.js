import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

export default function Footer() {
  console.log(styles);
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className="logo">
          <Link to="/"> <img src={logo} alt="logo Millor" /></Link>
        </div>
        <nav className="footer__nav">
          <ul className={styles.nav__list}>
            <li className="footer__nav__item">
              <a href="/#catalog">Каталог товаров</a>
              {/* <Link to="/">Каталог товаров</Link> */}
            </li>
            <li className="footer__nav__item">
              <Link to="/blog">Блог</Link>
            </li>
            <li className="footer__nav__item">
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer >
  )
}
