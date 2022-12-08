import React, { useContext, useState, useEffect } from 'react';
import icon from '../../../images/Basket/icon_delete.svg';
import { MillorContext } from './../../Context';

export default function BasketProductsItem({ item, img, title, text, price, pack, styles }) {
  const { removeProduct } = useContext(MillorContext);


  const [amountBasketProducts, setAmountBasketProducts] = useState(1);
  const [summ, setSumm] = useState(amountBasketProducts * (price - price * 0.1));

  const addCount = () => {
    setAmountBasketProducts(amountBasketProducts + 1);
  }

  const removeCount = () => {
    if (amountBasketProducts > 1) {
      setAmountBasketProducts(amountBasketProducts - 1);
    }
  }

  useEffect(() => {
    setSumm(amountBasketProducts * (price - price * 0.1));
  }, [amountBasketProducts]);

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
      <li className={styles.itemPrice}>{price} ₽</li>
      <li className={styles.itemAmount}>
        <button onClick={() => removeCount()}>-</button>{amountBasketProducts}<button onClick={() => addCount()}>+</button>
      </li>
      <li className={styles.itemDiscount}>{price * 0.1} ₽</li>
      <li className={styles.itemTotal}>{summ} ₽</li>
    </ul>
  )
}
