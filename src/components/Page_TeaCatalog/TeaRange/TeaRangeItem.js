import React, { useContext } from 'react';
import { MillorContext } from './../../Context';

export default function TeaRangeItem({ img, text, styles, item }) {
  const { filterTea, filterText } = useContext(MillorContext);

  return (
    <div
      className={text ? filterText === text ? `${styles.item} ${styles.active}` : styles.item : styles.disable}
      onClick={() => filterTea(item)}>
      <div className={styles.itemImg}>
        <img src={img} alt="tea" />
      </div>
      <p className={styles.rangeText}>{text}</p>
    </div>
  )
}
