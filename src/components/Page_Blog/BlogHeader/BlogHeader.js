import React from 'react';
import styles from './BlogHeader.module.scss';
import { Link, NavLink } from 'react-router-dom';



export default function BlogHeader() {
  return (
    <section className={styles.blogHeader}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.navigationLinks}>
            <ul>
              <li className={styles.navigationLink}><Link to='/'>Главная</Link></li>
              <li className={styles.navigationLink}>Блог</li>
            </ul>
            <div className={styles.navigationItems}>
              <button className={styles.navigationItem}><NavLink className={styles.itemLink} to="/">Обучение</NavLink></button>
              <button className={styles.navigationItem}><NavLink className={styles.itemLink} to="/">Новости</NavLink></button>
              <button className={styles.navigationItem}><NavLink className={styles.itemLink} to="/">Частые вопросы</NavLink></button>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}



