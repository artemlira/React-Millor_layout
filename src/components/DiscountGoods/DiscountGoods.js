import React from 'react';
import { Link } from 'react-router-dom';
import DiscountItem from '../DiscountItem/DiscountItem';
import styles from './DiscountGoods.module.scss';
import bg from '../../images/Discount Goods/bg.png';


export default function DiscountGoods() {
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
        <div className={styles.items}>
          <DiscountItem />
          <DiscountItem />
          <DiscountItem />
          <DiscountItem />
        </div>
        <Link className={styles.link} to="#">Смотреть все</Link>
      </div>
    </section>
  );
}



