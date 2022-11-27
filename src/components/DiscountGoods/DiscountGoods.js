import React from 'react';
import { Link } from 'react-router-dom';
import DiscountItem from '../DiscountItem/DiscountItem';
import styles from './DiscountGoods.module.scss';
import bg from '../../images/Discount Goods/bg.png';
import SlickSlider from 'react-slick';
import './Slider.scss';

export default function DiscountGoods() {

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
  };

  return (
    <section className={styles.discountGoods}>
      <div className="container">
        <div className={styles['wrapper_img']}>
          <img className={styles.img} src={bg} alt="coffee" />
        </div>
        <h3 className={styles.title}>Товары со скидкой</h3>
        <div className={styles.wrapperText}>
          <p className={styles.text}>Наша компания предлагает покупать товар со скидкой не только в дни распродаж
            или в течение действия ограниченных предложений, но и пользоваться скидками постоянно!</p>
        </div>
        <div className={styles.wrapperItems}>
          <div className={styles.items}>
            <SlickSlider {...settings}>
              <DiscountItem sale={true} />
              <DiscountItem sale={true} />
              <DiscountItem sale={true} />
              <DiscountItem sale={true} />
              <DiscountItem sale={true} />
              <DiscountItem sale={true} />
            </SlickSlider>
          </div>
        </div>
        <div className={styles.wrapperLink}>
          <Link className={styles.link} to="#">Смотреть все</Link>
        </div>
      </div>
    </section>
  );
}



