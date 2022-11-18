import React from 'react';
import '../style/slider.scss';
import coffee from '../images/slider/espresso.svg';

export default function Slider() {
  return (
    <section className="slider">
      <div className="slider__container container">
        <div className="slider__about">
          <h2 className="slider__title">Свежеобжаренный кофе</h2>
          <p className="slider__text">Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.</p>
          <p className="slider__text">Мы обжариваем кофе <span>каждые выходные.</span></p>
          <button className="slider__btn">Посмотреть каталог</button>
        </div>
        <div className="slider__img">
          <img src={coffee} alt="espresso" />
        </div>
      </div>
    </section>
  )
}
