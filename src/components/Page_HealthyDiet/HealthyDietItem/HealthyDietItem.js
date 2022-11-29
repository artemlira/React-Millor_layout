import React from 'react';
import styles from './HealthyDietItem.module.scss';
import { discountItemPics } from '../../ImagesDB';
import food from '../../../images/HealthyDiet/01.png'



export default function HealthyDietItem({ sale }) {
  return (
    <section className={styles.healthyDietItem}>
      <div className={styles.container}>
        <form action="/" className={styles.form}>

          <div className={styles.rating}>
            <img className={styles.stars} src={discountItemPics[3]} alt="stars" />
            <p className={styles.reviews}>4.0<span>(32 отзыва)</span></p>
          </div>

          <select name="target" className={styles.select}>
            <option>100 г.</option>
            <option>150 г.</option>
            <option>165 г.</option>
            <option>200 г.</option>
            <option>500 г.</option>
            <option>1000 г.</option>
          </select>

        </form>

        <div className={sale ? `${styles.img} ${styles.sale}` : styles.img}>
          <img src={food} alt="Packaging of barley powder" />
        </div>

        <div className={styles.wrapperText}>
          <h4 className={styles.title}>Наименование товара</h4>
          <p className={styles.text}>Черный чай</p>
        </div>

        <div className={styles.price}>
          <div className={sale ? `${styles.priceText} ${styles.sale}` : styles.priceText}>
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


