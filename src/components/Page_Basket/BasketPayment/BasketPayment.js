import React from 'react';
import styles from './BasketPayment.module.scss';


export default function BasketPayment() {
  return (
    <section className={styles.basketPayment}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.promocode}>
            <h6 className={styles.titlePromocode}>Промокод</h6>
            <p className={styles.textPromocode}>Введите подарочный промокод в поле ниже и получите скидку на заказ до 20%. Скидка не распространяется на доставку</p>
            <input type="text" className={styles.promo} placeholder='Введите промокод' />
            <button className={styles.promocodeBtn}>Ввести промокод</button>
          </div>
          <div className={styles.total}>

          </div>
        </div>
      </div>
    </section>
  );
}


