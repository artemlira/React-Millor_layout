import React, { useContext, useRef } from 'react';
import styles from './TeaItem.module.scss';
import { discountItemPics } from '../../ImagesDB';
import { MillorContext } from './../../Context';
import { Link } from 'react-router-dom';


export default function TeaItem({ productTitle, description, image, productPrice, item, sale, rating }) {

  const { addProduct, setOpenOneProduct, } = useContext(MillorContext);
  const pack = useRef();


  return (
    <div className={styles.teaItem}>
      <div className={styles.container}>
        <form action="/" className={styles.form}>
          <div className={styles.rating}>
            <img className={styles.stars} src={discountItemPics[3]} alt="stars" />
            <p className={styles.reviews}>{rating}.0 <span>(32 отзыва)</span></p>
          </div>
          <div className={styles.wrapperSelect}>
            <select ref={pack} name="target" className={styles.select}>
              <option value="100">100 г.</option>
              <option value="150">150 г.</option>
              <option value="165">165 г.</option>
              <option value="200">200 г.</option>
            </select>
          </div>
        </form>
        <Link onClick={() => setOpenOneProduct(item)} to='tea'>
          <div className={sale ? `${styles.img} ${styles.sale}` : styles.img}>
            <img src={image} alt="Tea packaging" />
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
            <button className={styles.btn} onClick={(e) => addProduct(e, item, pack)}>В корзину</button>
          </div>
        </div>

      </div>
    </div>
  );
}



