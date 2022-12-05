import React, { useContext } from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { icons } from '../ImagesDB';
import { MillorContext } from './../Context';



export default function Header() {
  const data = useContext(MillorContext);
  const setActive = ({ isActive }) => isActive ? 'active-header' : '';
  const setActiveNav = ({ isActive }) => isActive ? 'active-nav' : '';




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
                <NavLink
                  // onClick={data.scrollToHandler()}
                  to="/catalog" className={setActive} >Каталог товаров</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/blog" className={setActive}>Блог</NavLink>
              </li>
              <li className={styles.navItem}>
                {data.location.pathname !== '/shops' && <NavLink to='/contacts' className={setActive}>Контакты</NavLink>}
                {data.location.pathname === '/shops' && <NavLink to='/shops' className={setActive}>Контакты</NavLink>}
              </li>
            </ul>
          </nav>}

          {data.openSearch && <input className={styles.activeSearch} type="text" placeholder='Поиск по товарам' />}

          <div className={styles.icons}>

            {!data.openSearch && <div className={styles.icon} onClick={() => data.setOpenSearch(true)}>{icons[0]}</div>}

            <div className={styles.icon}>
              <NavLink className={setActiveNav} to="/basket">{icons[1]}</NavLink>
            </div>
            <div className={styles.icon}>
              <NavLink className={setActiveNav} to="/personal_area">{icons[2]}</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
