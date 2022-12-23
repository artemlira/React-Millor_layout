import React from 'react'

export default function TrainingItem({ img, title, styles, text }) {

  return (
    <div className={styles.item}>
      {title && <h6 className={styles.ItemTitle}>{title}</h6>}

      <div className={styles.laptop}>
        {text.map(item => <p key={Math.random() * 10} className={styles.text}>{item}</p>)}
      </div>

      <div className={styles.tablet}>
        {text.map((item, index) => index < 1 && <p key={Math.random() * 10} className={styles.text}>{item}</p>)}
      </div>

      <div className={styles.img}>
        <img src={img} alt={title} />
      </div>

    </div>
  )
}
