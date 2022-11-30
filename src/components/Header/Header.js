import React, { useContext } from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { icons } from '../ImagesDB';
import { MillorContext } from './../Context';



export default function Header() {
  const data = useContext(MillorContext);
  const setActive = ({ isActive }) => isActive ? 'active-header' : '';



  return (
    <section className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          <div className="logo">
            <Link to="/"> <img src={logo} alt="logo Millor" /></Link>
          </div>

          {!data.openSearch && <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <NavLink to="/catalog" className={setActive} >Каталог товаров</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/blog" className={setActive}>Блог</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/contacts" className={setActive}>Контакты</NavLink>
              </li>
            </ul>
          </nav>}

          {data.openSearch && <input className={styles.activeSearch} type="text" placeholder='Поиск по товарам' />}

          <div className={styles.icons}>

            {!data.openSearch && <div className={styles.icon}>
              <img
                src={icons[0]}
                alt="search icon"
                onClick={() => data.setOpenSearch(true)}
              />
            </div>}

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
