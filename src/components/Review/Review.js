import React from 'react';
import styles from './Review.module.scss';
import quotes from '../../images/Coffee/“”.png';


export default function Review({ title, data, avtor, city, rating, text, ava }) {
  return (
    <section className={styles.review}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.contant}>
            <h5 className={styles.icon}><img src={quotes} alt="quotes" /></h5>
            <div className={styles.wrapperTitle}>
              <h6 className={styles.title}>{title}</h6>
              <p className={styles.data}>{data}</p>
            </div>
            <div className={styles.raiting}><img src={rating} alt="stars" /></div>
            <div className={styles.wrapperText}>
              <p className={styles.text}>{text}</p>
            </div>
          </div>
          <div className={styles.client}>
            <div className={styles.photo}><img src={ava} alt="photo" /> </div>
            <div className={styles.about}>
              <h6 className={styles.name}>{avtor}</h6>
              <p className={styles.city}>{city}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



