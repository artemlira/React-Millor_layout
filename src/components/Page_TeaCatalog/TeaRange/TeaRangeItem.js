import React from 'react'

export default function TeaRangeItem({ img, text, styles }) {
  return (
    <div className={text ? styles.item : styles.disable}>
      <div className={styles.itemImg}>
        <img src={img} alt="tea" />
      </div>
      <p className={styles.rangeText}>{text}</p>
    </div>
  )
}
