import React from 'react';
import styles from './ContactsHeader.module.scss';
import { Link } from 'react-router-dom';


export default function ContactsHeader() {
  return (
    <section className={styles.contactsHeader}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.navigationLinks}>
            <ul>
              <li className={styles.navigationLink}><Link to='/'>Главная</Link></li>
              <li className={styles.navigationLink}>Контакты</li>
            </ul>
            <div className={styles.navigationItems}>
              <button className={styles.navigationItem}><a href='/'>Контакты</a></button>
              <button className={styles.navigationItem}><a href="/">Наши магазины</a></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



