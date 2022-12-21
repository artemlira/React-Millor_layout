import React from 'react';
import styles from './BasketPayment.module.scss';
import RangeItem from './../../Page_CoffeeCatalog/ProductRange/RangeItem';
import { deliveryOptions } from './../../TextsDB';


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
            <div className={styles.wrapperTitleTotal}>
              <h6 className={styles.titleTotal}>Итог: 486 ₽</h6>
              <div className={styles.imgTotal}>
                <div className={styles.masterCard}></div>
                <div className={styles.visa}></div>
              </div>
            </div>
            <p className={styles.textTotal}>Подытог: 540 ₽</p>
            <p className={styles.discountTotal}>Скидка: 54 ₽ (10%)</p>
            <div className={styles.delivery}>
              <p>Доставка: </p>
              <form name={styles.delivery}>
                <ul className={styles.deliveryList}>
                  {deliveryOptions.map(item =>
                    <RangeItem
                      key={Math.random() * 10}
                      styles={styles}
                      text={item.text}
                      name='delivery'
                      span={item.span} />)}
                </ul>
              </form>
            </div>
            <button className={styles.totalBtn}>Оплатить заказ</button>
            <p className={styles.notification}>Ваши персональные данные будут использоваться для управления доступом к вашей учетной записи и для других целей, описанных в нашем документе политика конфиденциальности.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


