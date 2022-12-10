import React, { useContext } from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { icons } from '../ImagesDB';
import { MillorContext } from './../Context';
import RegistrationForm from './../RegistrationForm/RegistrationForm';



export default function Header() {
  const { openSearch, setOpenSearch, location, products, openRegistrationForm, setOpenRegistrationForm } = useContext(MillorContext);

  const setActive = ({ isActive }) => isActive ? 'active-header' : '';
  const setActiveNav = ({ isActive }) => isActive ? 'active-nav' : '';


  return (
    <section className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          <div className="logo">
            <Link to="/"> <img src={logo} alt="logo Millor" /></Link>
          </div>

          {!openSearch && <nav className={styles.nav}>
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
                {location.pathname !== '/shops' && <NavLink to='/contacts' className={setActive}>Контакты</NavLink>}
                {location.pathname === '/shops' && <NavLink to='/shops' className={setActive}>Контакты</NavLink>}
              </li>
            </ul>
          </nav>}

          {openSearch && <input className={styles.activeSearch} type="text" placeholder='Поиск по товарам' />}

          <div className={styles.icons}>

            {!openSearch && <div className={styles.icon} onClick={() => setOpenSearch(true)}>{icons[0]}</div>}

            <div className={styles.icon}>
              <NavLink className={setActiveNav} to="/basket">{icons[1]}</NavLink>
              {products.length > 0 && <span className={styles.iconActive}>{products.length}</span>}
            </div>
            <div className={styles.icon}>
              <Link to='/'
                // className={setActiveNav} 
                // to="/personal_area"
                onClick={() => setOpenRegistrationForm(true)}>{icons[2]}</Link>

            </div>
          </div>
        </div>
      </div>
      {openRegistrationForm && <RegistrationForm />}
    </section >
  );
}
