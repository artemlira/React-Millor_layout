import React, { useContext, useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { icons } from '../ImagesDB';
import { MillorContext } from './../Context';
import RegistrationForm from './../RegistrationForm/RegistrationForm';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import OpenNav from './OpenNav';




export default function Header() {
  const { openSearch, setOpenSearch, location, products, openRegistrationForm, setOpenRegistrationForm, openNav, setOpenNav } = useContext(MillorContext);

  const setActive = ({ isActive }) => isActive ? 'active-header' : '';
  const setActiveNav = ({ isActive }) => isActive ? 'active-nav' : '';
  // const [openNav, setOpenNav] = useState(false);




  return (
    <header className={styles.header}>
      <div className="container">
        {!openNav ?
          <>
            <div className={styles.container}>

              <span onClick={() => setOpenNav(true)} className={styles.mobileBtn}></span>

              <div className={styles.logo}>
                <Link to="/"> <img src={logo} alt="logo Millor" /></Link>
              </div>

              {!openSearch &&
                <nav className={styles.nav}>
                  <ul className={styles.navList}>
                    <li className={styles.navItem}>
                      <NavLink
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
                <div className={styles.icon} onClick={() => setOpenRegistrationForm(true)}>{icons[2]}
                  {/* <Link to='/' onClick={() => setOpenRegistrationForm(true)}>{icons[2]}</Link> */}
                </div>
              </div>
            </div>
          </>
          :
          <OpenNav />
        }
      </div>
      {openRegistrationForm && <RegistrationForm />}
    </ header>
  );
}
