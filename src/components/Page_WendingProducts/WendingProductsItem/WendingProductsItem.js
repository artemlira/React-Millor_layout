import React, {useContext} from 'react';
import styles from './WendingProductsItem.module.scss';
import { discountItemPics } from '../../ImagesDB.js';
import { Link } from 'react-router-dom';
import { MillorContext } from './../../Context';




export default function WendingProductsItem({ productTitle, description, image, sale, rating, item }) {

  const { pack, setOpenOneProduct } = useContext(MillorContext);
  return (
    <section className={styles.wendingProductsItem}>
      <div className={styles.container}>
        <form action="/" className={styles.form}>
          <div className={styles.rating}>
            <img className={styles.stars} src={discountItemPics[3]} alt="stars" />
            <p className={styles.reviews}>{rating}.0 <span>(32 отзыва)</span></p>
          </div>
          <select ref={pack} name="target" className={styles.select}>
            <option>10 кг.</option>
            <option>18 кг.</option>
            <option>25 кг.</option>
            <option>30 кг.</option>
            <option>33 кг.</option>
          </select>
        </form>
        <Link onClick={() => setOpenOneProduct(item)} to='wending'>
          <div className={sale ? `${styles.img} ${styles.sale}` : styles.img}>
            <img src={image} alt="coffee" />
          </div>

          <div className={styles.wrapperText}>
            <h4 className={styles.title}>{productTitle}</h4>
            <p className={styles.text}>{description}</p>
          </div>
        </Link>

        <button className={styles.btn}>Оставить заявку</button>

      </div>
    </section>
  );
}



