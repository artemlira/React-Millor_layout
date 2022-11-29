import React from 'react';
import styles from './HealthyRange.module.scss';
import img from '../../../images/HealthyDiet/image.png';
import { foodRange } from '../../ImagesDB.js';
import TeaRangeItem from './../../Page_TeaCatalog/TeaRange/TeaRangeItem';


export default function HealthyRange() {
  return (
    <section className={styles.healthyRange}>
      <div className="container">
        <div className={styles.container}>

          <div className={styles.img}>
            <img src={img} alt="Coffee machine" />
          </div>

          <ul className={styles.navigation}>
            <li className={styles.navigationItem}>Главная</li>
            <li className={styles.navigationItem}>Каталог товаров</li>
            <li className={styles.navigationItem}>Здоровое питание</li>
          </ul>

          <h4 className={styles.title}>Здоровое питание</h4>

          <div className={styles.range}>
            {
              foodRange.map((item) =>
                <TeaRangeItem key={Math.random() * 100} img={item.img} text={item.text} styles={styles} />
              )
            }
          </div>


        </div>
      </div>
    </section>
  );
}



