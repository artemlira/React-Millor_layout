import React, { useContext } from 'react';
import icon from '../../../images/Basket/icon_delete.svg';
import { MillorContext } from './../../Context';

export default function BasketProductsItem({ item, img, title, text, price, pack, styles }) {
  const { removeProduct } = useContext(MillorContext);

  return (
    <ul className={styles.productsItem}>
      <li className={styles.delete} onClick={() => removeProduct(item)}>
        <img src={icon} alt="delete" /></li>
      <li className={styles.itemProduct}>
        <img src={img} alt="product" />
        <div>
          <h6 className={styles.itemTitle}>{title}</h6>
          <p className={styles.itemText}>{text}</p>
          <p className={styles.itemText}>{pack}</p>
        </div>
      </li>
      <li className={styles.itemPrice}>{price}</li>
      <li className={styles.itemAmount}>
        <button>-</button>1<button>+</button>
      </li>
      <li className={styles.itemDiscount}>27 ₽</li>
      <li className={styles.itemTotal}>243 ₽</li>
    </ul>
  )
}
