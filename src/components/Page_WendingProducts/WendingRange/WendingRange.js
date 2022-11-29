import React from 'react';
import styles from './WendingRange.module.scss';
import img from '../../../images/Wending Products/image.png';
import { wendingRange } from '../../ImagesDB.js';
import TeaRangeItem from './../../Page_TeaCatalog/TeaRange/TeaRangeItem';
import { Link } from 'react-router-dom';


export default function WendingRange() {
  return (
    <section className={styles.wendingRange}>
      <div className="container">
        <div className={styles.container}>

          <div className={styles.img}>
            <img src={img} alt="Coffee machine" />
          </div>

          <ul className={styles.navigation}>
            <li className={styles.navigationItem}><Link to='/'>Главная</Link></li>
            <li className={styles.navigationItem}><Link to='/catalog'>Каталог товаров</Link></li>
            <li className={styles.navigationItem}>Продукция для вендинга</li>
          </ul>

          <h4 className={styles.title}>Продукция для вендинга</h4>

          <div className={styles.range}>
            {
              wendingRange.map((item) =>
                <TeaRangeItem key={Math.random() * 100} img={item.img} text={item.text} styles={styles} />
              )
            }
          </div>

        </div>
      </div>
    </section>
  );
}



