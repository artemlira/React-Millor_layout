import React, { useContext } from 'react';
import styles from './HealthyDietItem.module.scss';
import { discountItemPics } from '../../ImagesDB';
import food from '../../../images/HealthyDiet/01.png'
import { MillorContext } from './../../Context';


export default function HealthyDietItem({ sale }) {
  const { pic, title, text, price, pack, addProduct } = useContext(MillorContext);
  return (
    <section className={styles.healthyDietItem}>
      <div className={styles.container}>
        <form action="/" className={styles.form}>

          <div className={styles.rating}>
            <img className={styles.stars} src={discountItemPics[3]} alt="stars" />
            <p className={styles.reviews}>4.0<span>(32 отзыва)</span></p>
          </div>

          <select name="target" className={styles.select} ref={pack}>
            <option>100 г.</option>
            <option>150 г.</option>
            <option>165 г.</option>
            <option>200 г.</option>
            <option>500 г.</option>
            <option>1000 г.</option>
          </select>

        </form>

        <div className={sale ? `${styles.img} ${styles.sale}` : styles.img}>
          <img ref={pic} src={food} alt="Packaging of barley powder" />
        </div>

        <div className={styles.wrapperText}>
          <h4 ref={title} className={styles.title}>Наименование товара</h4>
          <p ref={text} className={styles.text}>Черный чай</p>
        </div>

        <div className={styles.price}>
          <div className={sale ? `${styles.priceText} ${styles.sale}` : styles.priceText}>
            <p ref={price}>250 ₽</p>
          </div>
          <div >
            <button className={styles.btn} onClick={(e) => addProduct(e)}>В корзину</button>
          </div>
        </div>

      </div>
    </section>
  );
}



