import React, { useContext } from 'react';
import { MillorContext } from './../../Context';

export default function BasketProductsItem({ item, img, title, text, price, pack, styles, amount, summ, discount }) {
  const { removeProduct, addCount, removeCount } = useContext(MillorContext);
  return (
    <>
      <ul className={styles.productsItem}>
        <li className={styles.delete} onClick={() => removeProduct(item)}></li>
        <li className={styles.itemProduct}>
          <img src={img} alt="product" />
          <div>
            <h6 className={styles.itemTitle}>{title}</h6>
            <p className={styles.itemText}>{text}</p>
            <p className={styles.itemText}>{pack}</p>
          </div>
        </li>
        <li className={styles.itemPrice}>{price} ₽</li>
        <li className={styles.itemAmount}>
          <button onClick={() => removeCount(item)}>-</button>{amount}<button onClick={() => addCount(item)}>+</button>
        </li>
        <li className={styles.itemDiscount}>{(+price * amount) * discount} ₽</li>
        <li className={styles.itemTotal}>{(amount * price) - (price * discount * amount)} ₽</li>
      </ul>

      <ul className={styles.productsItemTablet}>
        <li className={styles.contant}>
          <div className={styles.itemProduct}>
            <div className={styles.img}>
              <img src={img} alt="product" />
            </div>
            <div className={styles.wrapperText}>
              <h6 className={styles.itemTitle}>{title}</h6>
              <p className={styles.itemText}>{text}</p>
              <p className={styles.itemText}>{pack}</p>
            </div>
          </div>
          <div className={styles.price}>
            <p className={styles.itemTotal}>{(amount * price) - (price * discount * amount)} ₽</p>
            <div className={styles.itemPriceWrapper}>
              <p className={styles.itemPrice}>{amount * price} ₽</p>
              <p className={styles.itemDiscount}>(-10%)</p>
            </div>
          </div>
        </li>
        <li className={styles.buttons}>
          <div className={styles.delete} onClick={() => removeProduct(item)}></div>
          <div className={styles.itemAmount}>
            <button onClick={() => removeCount(item)}>-</button>{amount}<button onClick={() => addCount(item)}>+</button>
          </div>
        </li>
      </ul>
    </>
  )
}
