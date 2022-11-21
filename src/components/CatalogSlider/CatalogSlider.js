import React from 'react';
import './catalogSlider.scss';
import coffee from '../../images/slider/coffee.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function CatalogSlider() {

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    zIndex: 0,
  };
  return (
    <Slider {...settings}>
      <section className='catalogSlider'>
        <div className='catalogSlider__container container'>
          <div className='catalogSlider__about'>
            <h2 className='catalogSlider__title'>Свежеобжаренный кофе</h2>
            <p className="catalogSlider__text">Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.</p>
            <p className="catalogSlider__text">Мы обжариваем кофе <span>каждые выходные.</span></p>
            <button className="catalogSlider__btn">Посмотреть каталог</button>
          </div>
          <div className="catalogSlider__img">
            <img src={coffee} alt="espresso" />
          </div>
        </div>
      </section >
      <section className='catalogSlider'>
        <div className='catalogSlider__container container'>
          <div className='catalogSlider__about'>
            <h2 className='catalogSlider__title'>Свежеобжаренный кофе</h2>
            <p className="catalogSlider__text">Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.</p>
            <p className="catalogSlider__text">Мы обжариваем кофе <span>каждые выходные.</span></p>
            <button className="catalogSlider__btn">Посмотреть каталог</button>
          </div>
          <div className="catalogSlider__img">
            <img src={coffee} alt="espresso" />
          </div>
        </div>
      </section >
      <section className='catalogSlider'>
        <div className='catalogSlider__container container'>
          <div className='catalogSlider__about'>
            <h2 className='catalogSlider__title'>Свежеобжаренный кофе</h2>
            <p className="catalogSlider__text">Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.</p>
            <p className="catalogSlider__text">Мы обжариваем кофе <span>каждые выходные.</span></p>
            <button className="catalogSlider__btn">Посмотреть каталог</button>
          </div>
          <div className="catalogSlider__img">
            <img src={coffee} alt="espresso" />
          </div>
        </div>
      </section >
    </Slider>
  );
}
