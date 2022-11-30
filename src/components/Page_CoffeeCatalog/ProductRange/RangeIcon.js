import React from 'react'

export default function RangeIcon({ img, text,  styles }) {
  return (
    <li className={styles.item}>
      <p className={styles.iconsText}>{text}</p>
      <div className={styles.iconsImg}>
        {img}
      </div>
    </li>
  )
}
