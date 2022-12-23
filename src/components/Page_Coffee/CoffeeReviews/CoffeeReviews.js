import React, { useContext } from 'react';
import styles from './CoffeeReviews.module.scss';
import { MillorContext } from './../../Context';
import Review from '../../Review/Review';



export default function CoffeeReviews() {
  const { openOneProduct } = useContext(MillorContext);

  return (
    <section className={styles.coffeeReviews}>
      <div className="container">
        <div className={styles.container}>
          {openOneProduct.review.map(i =>
            <Review
              key={Math.random() * 10}
              title={i.title}
              data={i.data}
              avtor={i.avtor}
              city={i.city}
              rating={i.rating}
              text={i.text}
              ava={i.photo}
            />)}
        </div>
      </div>
    </section>
  );
}



