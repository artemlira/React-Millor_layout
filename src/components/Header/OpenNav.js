import React, { useContext } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { icons } from '../ImagesDB';
import { MillorContext } from './../Context';
import { motion, AnimatePresence } from 'framer-motion';
import phone from '../../images/header/phone.png';
import insta from '../../images/header/insta.png';


export default function OpenNav() {
  const { products, setOpenRegistrationForm, openNav, setOpenNav } = useContext(MillorContext);
  return (

    <AnimatePresence>
      {
        openNav && (
          <motion.div
            initial={{ right: 100 }}
            animate={{ right: 0 }}
            exit={{ right: 100 }}
            transition={{
              duration: 0.3
            }}
            className={styles.containerOpenNav}>
            <div className={styles.wrapperLogo}>
              <div className={styles.logo}>
                <Link to="/"> <img src={logo} alt="logo Millor" /></Link>
              </div>
              <span onClick={() => setOpenNav(false)} className={styles.mobileBtnClose}></span>
            </div>
            <nav className={styles.navOpen}>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <Link to="/catalog" onClick={() => setOpenNav(false)}>Каталог товаров</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/blog" onClick={() => setOpenNav(false)}>Блог</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='/contacts' onClick={() => setOpenNav(false)}>Контакты</Link>
                </li>
              </ul>
            </nav>
            <div className={styles.wrapperIcons}>
              <div className={styles.icon} onClick={() => setOpenNav(false)}>
                <Link to="/basket">{icons[1]}</Link>
                {products.length > 0 && <span className={styles.iconActive}>{products.length}</span>}
              </div>
              <div className={styles.icon} onClick={() => setOpenNav(false)}>{icons[2]}</div>
            </div>
            <div className={styles.wrapperContant}>
              <a href="mailto:Import@kldrefine.com">Import@kldrefine.com</a>
              <div className={styles.contantImages}>
                <img src={phone} alt="phone" />
                <img src={insta} alt="instagram" />
              </div>
            </div>
          </motion.div>
        )
      }
    </AnimatePresence>
  )
}
