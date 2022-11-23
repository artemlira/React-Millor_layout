import React from 'react';
import styles from './DiscountItem.module.scss';
import './discountItem.scss';
import { discountItemPics } from '../ImagesDB';

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
        </div>
        <div className="wrapper">
          <div className="img">
            <img src={discountItemPics[0]} alt="coffee" />
          </div>
          <div className="about"></div>
        </div>
        <div className="wrapperText">
          <h4 className="title">Colombia Supremo</h4>
          <p className="text">Свежеобжаренный кофе - описание товара, вкус, аромат</p>
        </div>
        <div className="price">
          <div className="priceText"></div>
          <div className="div btn"></div>
        </div>

      </div>
    </section>
  );
}



