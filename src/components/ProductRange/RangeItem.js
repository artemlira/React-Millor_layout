import React from 'react'

export default function RangeItem({ img, styles }) {
  return (
    <li className={styles.iconItem}>
      <label>
        <input className={styles.input} type="radio" name='range'></input>
        <span className={styles.customRadio}></span>
        <img className={styles.iconImg} src={img} alt="The degree of frying" />
      </label>
    </li>
  )
}
