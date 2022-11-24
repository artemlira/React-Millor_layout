import React from 'react';
import styles from './DiscountItem.module.scss';
import './discountItem.scss';
import { discountItemPics } from '../ImagesDB';
// import { Link } from 'react-router-dom';

export default function DiscountItem() {
  return (
    <section className={styles.discountItem}>
      <div className={styles.container}>
        <form action="/" className={styles.form}>
          <select name="target" className={styles.select}>
            <option selected>250 г.</option>
            <option>1000 г.</option>
          </select>
        </form>
        <div className={styles.discount}>
          <p>Скидки</p>
          <div className={styles.wrapperDiscountImg}>
            <img className={styles.discountImg} src={discountItemPics[4]} alt="icon percent" />
          </div>
        </div>
        <div className={styles.wrapper} >
          <div className={styles.img}>
            <img src={discountItemPics[0]} alt="coffee" />
          </div>
          <div className={styles.about}>
            <img className={styles.stars} src={discountItemPics[3]} alt="stars" />
            <p className={styles.reviews}>4.0<span>(32 отзыва)</span></p>
            <img className={styles.coffeeBeans} src={discountItemPics[1]} alt="coffee beans" />
            <p className={styles.description}>Кислинка</p>
            <img className={styles.descriptionImg} src={discountItemPics[2]} alt="" />
            <p className={styles.description}>Горчинка</p>
            <img className={styles.descriptionImg} src={discountItemPics[2]} alt="" />
            <p className={styles.description}>Насыщенность</p>
            <img className={styles.descriptionImg} src={discountItemPics[2]} alt="" />
          </div>
        </div>
        <div className={styles.wrapperText}>
          <h4 className={styles.title}>Colombia Supremo</h4>
          <p className={styles.text}>Свежеобжаренный кофе - описание товара, вкус, аромат</p>
        </div>
        <div className={styles.price}>
          <div className={styles.priceText}>
            <p>250 ₽</p>
          </div>
          <div >
            <button className={styles.btn}>В корзину</button>
          </div>
        </div>

      </div>
    </section>
  );
}



