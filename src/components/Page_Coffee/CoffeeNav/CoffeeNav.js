import React from 'react';
import styles from './CoffeeNav.module.scss';
import { Link } from 'react-router-dom';


export default function CoffeeNav() {
  return (
    <section className={styles.coffeeNav}>
      <div className="container">
        <div className={styles.container}>
          <ul className={styles.navigation}>
            <li className={styles.navigationItem}><Link to='/'>Главная</Link></li>
            <li className={styles.navigationItem}><Link to='/catalog'>Каталог товаров</Link></li>
            <li className={styles.navigationItem}><Link to='/coffee_catalog'>Свежеобжаренный кофе</Link></li>
            <li className={styles.navigationItem}>Карточка товара название</li>
          </ul>
        </div>
      </div>
    </section>
  );
}



