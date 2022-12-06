import React, { useContext } from 'react';
import styles from './TeaItem.module.scss';
import { discountItemPics } from '../../ImagesDB';
import tea from '../../../images/TeaCatalog/01.png';
import { MillorContext } from './../../Context';
import { Link } from 'react-router-dom';


export default function TeaItem({ sale }) {

  const { pic, title, text, price, pack, addProduct } = useContext(MillorContext);
  return (
    <section className={styles.teaItem}>
      <div className={styles.container}>
        <Link to='tea'>
          <form action="/" className={styles.form}>
            <div className={styles.rating}>
              <img className={styles.stars} src={discountItemPics[3]} alt="stars" />
              <p className={styles.reviews}>4.0<span>(32 отзыва)</span></p>
            </div>

            <select ref={pack} name="target" className={styles.select}>
              <option>100 г.</option>
              <option>150 г.</option>
              <option>165 г.</option>
              <option>200 г.</option>
            </select>

          </form>
          <div className={sale ? `${styles.img} ${styles.sale}` : styles.img}>
            <img ref={pic} src={tea} alt="Tea packaging" />
          </div>

          <div className={styles.wrapperText}>
            <h4 ref={title} className={styles.title}>Наименование товара</h4>
            <p ref={text} className={styles.text}>Черный чай</p>
          </div>
        </Link>
        <div className={styles.price}>
          <div className={sale ? `${styles.priceText} ${styles.sale}` : styles.priceText}>
            <p ref={price}>250 <span>₽</span></p>
          </div>
          <div >
            <button className={styles.btn} onClick={(e) => addProduct(e)}>В корзину</button>
          </div>
        </div>

      </div>
    </section>
  );
}



