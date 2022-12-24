import React, { useContext } from 'react';
import styles from './HealthyDietItem.module.scss';
import { discountItemPics } from '../../ImagesDB';
import { MillorContext } from './../../Context';
import { Link } from 'react-router-dom';


export default function HealthyDietItem({ productTitle, description, image, productPrice, item, sale, rating }) {
  const { pack, addProduct } = useContext(MillorContext);
  return (
    <section className={styles.healthyDietItem}>
      <div className={styles.container}>
        <form action="/" className={styles.form}>

          <div className={styles.rating}>
            <img className={styles.stars} src={discountItemPics[3]} alt="stars" />
            <p className={styles.reviews}>{rating}.0 <span>(32 отзыва)</span></p>
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
        <Link to='healthy_eating'>
          <div className={sale ? `${styles.img} ${styles.sale}` : styles.img}>
            <img src={image} alt="Packaging of barley powder" />
          </div>

          <div className={styles.wrapperText}>
            <h4 className={styles.title}>{productTitle}</h4>
            <p className={styles.text}>{description}</p>
          </div>
        </Link>
        <div className={styles.price}>
          <div className={sale ? `${styles.priceText} ${styles.sale}` : styles.priceText}>
            <p>{productPrice} ₽</p>
          </div>
          <div >
            <button className={styles.btn} onClick={(e) => addProduct(e, item)}>В корзину</button>
          </div>
        </div>

      </div>
    </section>
  );
}



