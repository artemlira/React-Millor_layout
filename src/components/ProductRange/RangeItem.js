import React from 'react'

export default function RangeItem({ img, styles, text }) {
  return (
    <li className={styles.iconItem}>
      <label className={text && styles.aboutWrapper}>
        <input className={styles.input} type="radio" name='range'></input>
        <span className={styles.customRadio}></span>
        {img ?
          <img className={styles.iconImg} src={img} alt="The degree of frying" />
          :
          <p>{text}</p>
        }
      </label>
    </li>
  )
}
