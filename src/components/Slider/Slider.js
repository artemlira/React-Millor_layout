import React from 'react';
import styles from './slider.module.scss';
import coffee from '../../images/slider/coffee.png';

export default function Slider() {
  return (
    <section className={styles}>
      <div className={styles.container}>
        <div className={styles.about}>
          <h2 className={styles.title}>Свежеобжаренный кофе</h2>
          <p className="slider__text">Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.</p>
          <p className="slider__text">Мы обжариваем кофе <span>каждые выходные.</span></p>
          <button className="slider__btn">Посмотреть каталог</button>
        </div>
        <div className="slider__img">
          <img src={coffee} alt="espresso" />
        </div>
      </div>
    </section >
  )
}
