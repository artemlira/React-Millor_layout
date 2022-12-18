import React from 'react'

export default function TrainingItem({ img, title, styles, text }) {

  return (
    <div className={styles.item}>
      <h6 className={styles.ItemTitle}>{title}</h6>
      {
        text.map(item =>
          <p
            key={Math.random() * 10}
            className={styles.text}>{item}</p>
        )
      }
      <div className={styles.img}><img src={img} alt={title} /></div>
    </div>
  )
}
