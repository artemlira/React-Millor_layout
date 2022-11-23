import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { icons } from '../ImagesDB';

export default function Header() {
  return (
    <section className={styles.header}>
      <div className="container">
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
          <div className={styles.icons}>
            <div className={styles.icon}>
              <Link to='/'> <img src={icons[0]} alt="search icon" /></Link>
            </div>
            <div className={styles.icon}>
              <Link to="/basket"><img src={icons[1]} alt="basket icon" /></Link>
            </div>
            <div className={styles.icon}>
              <Link to="/personal_area"><img src={icons[2]} alt="personal Area icon" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
