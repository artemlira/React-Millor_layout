import React, { useContext } from 'react';
import styles from './DiscountItem.module.scss';
import './discountItem.scss';
import { discountItemPics } from '../../ImagesDB';
import { MillorContext } from './../../Context';
import { Link } from 'react-router-dom';


export default function DiscountItem({ sale }) {
  const { pic, title, text, price, pack, addProduct } = useContext(MillorContext);


  return (
    <section className={styles.discountItem}>
      <div className={styles.container}>
        <form action="/" className={sale ? styles.form : styles.formNoSale}>
          {!sale &&
            <div className={styles.noDiscount}>
              <p>Популярное</p>
              <p>Новый урожай</p>
            </div>}

          <select name="target" className={styles.select} ref={pack}>
            <option>250 г.</option>
            <option>1000 г.</option>
          </select>


        </form>

        {sale &&
          <div className={styles.discount}>
            <p>Скидки</p>
            <div className={styles.wrapperDiscountImg}>
              <img className={styles.discountImg} src={discountItemPics[4]} alt="icon percent" />
            </div>
          </div>
        }
        <Link className={styles.link} to='coffee'>
          <div className={styles.wrapper} >
            <div className={styles.img}>
              <img ref={pic} src={discountItemPics[0]} alt="coffee" />
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
            <h4 ref={title} className={styles.title}>Colombia Supremo</h4>
            <p ref={text} className={styles.text}>Свежеобжаренный кофе - описание товара, вкус, аромат</p>
          </div>
        </Link>
        <div className={styles.price}>
          <div className={sale ? `${styles.priceText} ${styles.sale}` : styles.priceText}>
            <p ref={price}>250 ₽</p>
          </div>
          <div >
            <button className={styles.btn} onClick={(e) => addProduct(e)}>В корзину</button>
            {/* {!productInBasket && <button className={styles.btn} onClick={(e) => addProduct(e)}>В корзину</button>} */}
            {/* {productInBasket && <button className={styles.activeBasket}>Товар в корзине</button>} */}
          </div>
        </div>

      </div>
    </section>
  );
}



