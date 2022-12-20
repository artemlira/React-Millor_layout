import React, { useContext } from 'react';
import { MillorContext } from './../../Context';

export default function TeaRangeItem({ img, text, styles, item }) {
  const { filterTea, filterText, location, filterHealthyDiet, filterWending } = useContext(MillorContext);

  const filter = (item) => {
    if (location.pathname === '/catalog/tea_catalog') {
      return filterTea(item);
    }
    if (location.pathname === '/catalog/healthy_diet') {
      return filterHealthyDiet(item);
    }
    if (location.pathname === '/catalog/wending_products') {
      return filterWending(item);
    }
  }

  return (
    <div
      className={text ? filterText === text ? `${styles.item} ${styles.active}` : styles.item : styles.disable}
      onClick={() => filter(item)}>
      <div className={styles.itemImg}>
        <img src={img} alt="tea" />
      </div>
      <p className={styles.rangeText}>{text}</p>
    </div>
  )
}
