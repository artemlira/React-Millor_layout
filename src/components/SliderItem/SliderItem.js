import React from 'react';
import styles from './SliderItem.module.scss';
import coffee from '../../images/slider/coffee.png';


export default function SliderItem() {
  return (
    <div className={ styles.item}>
      <div className={styles.about}>
        <h2 className={styles.title}>Свежеобжаренный кофе</h2>
        <p className={styles.text}>Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.</p>
        <p className={styles.text}>Мы обжариваем кофе <span>каждые выходные.</span></p>
        <button className={styles.btn}>Посмотреть каталог</button>
      </div>
      <div className={styles.img}>
        <img src={coffee} alt="espresso" />
      </div>
    </div>
  );
}


