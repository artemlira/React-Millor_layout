import React from 'react';
import styles from './Advantages.module.scss';
import { advantagesPics } from '../ImagesDB';


export default function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.img}>
            <img src={advantagesPics[0]} alt="" />
          </div>
          <div className={styles.about}>
            <h4 className={styles.title}>Почему стоит работать именно с нами?</h4>

            <div className={styles.advantage}>
              <div className={styles.advantageImg}>
                <img src={advantagesPics[1]} alt="" />
              </div>
              <div className={styles.wrapper}>
                <h5 className={styles.advantageTitle}>Всегда свежая обжарка</h5>
                <p className={styles.advantageText}>Подбор степени обжарки под каждый сорт кофе. Всегда свежая обжарка</p>
              </div>
            </div>

            <div className={styles.advantage}>
              <div className={styles.advantageImg}>
                <img src={advantagesPics[2]} alt="" />
              </div>
              <div className={styles.wrapper}>
                <h5 className={styles.advantageTitle}>Лучшие цены на продукцию</h5>
                <p className={styles.advantageText}>Благодаря крупным объемам производства мы даем лучшие цены на нашу продукцию</p>
              </div>
            </div>

            <div className={styles.advantage}>
              <div className={styles.advantageImg}>
                <img src={advantagesPics[3]} alt="" />
              </div>
              <div className={styles.wrapper}>
                <h5 className={styles.advantageTitle}>Консультации 24/7</h5>
                <p className={styles.advantageText}>Наши специалисты готовы всегда помочь
                  и подсказать вам с выбором кофе или другой продукции.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



