import React from 'react';
import styles from './WendingProductsItem.module.scss';
import img from '../../../images/Wending Products/Rectangle 61.png';
import { discountItemPics } from '../../ImagesDB.js';


export default function WendingProductsItem({ sale }) {
  return (
    <section className={styles.wendingProductsItem}>
      <div className={styles.container}>

        <form action="/" className={styles.form}>
          <div className={styles.rating}>
            <img className={styles.stars} src={discountItemPics[3]} alt="stars" />
            <p className={styles.reviews}>4.0<span>(32 отзыва)</span></p>
          </div>

          <select name="target" className={styles.select}>
            <option>10 кг.</option>
            <option>18 кг.</option>
            <option>25 кг.</option>
            <option>30 кг.</option>
            <option>33 кг.</option>
          </select>

        </form>

        <div className={sale ? `${styles.img} ${styles.sale}` : styles.img}>
          <img src={img} alt="coffee" />
        </div>

        <div className={styles.wrapperText}>
          <h4 className={styles.title}>Наименование товара</h4>
          <p className={styles.text}>Гранулированный кофе</p>
        </div>


        <button className={styles.btn}>Оставить заявку</button>


      </div>
    </section>
  );
}



