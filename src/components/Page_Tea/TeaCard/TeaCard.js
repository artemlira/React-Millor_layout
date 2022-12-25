import React, { useContext, useState } from 'react';
import styles from './TeaCard.module.scss';
import { MillorContext } from './../../Context';
import { discountItemPics } from '../../ImagesDB.js';


export default function TeaCard() {
  const { pack, openOneProduct, addOneCard, removeOneCard, addProduct } = useContext(MillorContext);

  const [showText, setShowText] = useState(false);

  return (
    <section className={styles.teaCard}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.reviewsTablet}>
            <div className={styles.reviewsStars}><img src={discountItemPics[3]} alt="stars" /></div>
            <p className={styles.reviewsText}>{openOneProduct.rating}.0 <span>(32 отзыва)</span></p>
          </div>
          <div className={styles.image}>
            <img src={openOneProduct.image} alt={openOneProduct.title} />
          </div>
          <div className={styles.contant}>
            <div className={styles.wrapperTitle}>
              <h6 className={styles.title}>{openOneProduct.title}</h6>
              {openOneProduct.description.map(i => <p key={Math.random() * 10} className={styles.text}>{i}</p>)}
            </div>
            <div className={styles.reviews}>
              <div className={styles.reviewsStars}><img src={discountItemPics[3]} alt="stars" /></div>
              <p className={styles.reviewsText}>{openOneProduct.rating}.0 <span>(32 отзыва)</span></p>
            </div>
            <div className={styles.contantAbout}>
              <p className={styles.aboutText}>Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и представительство в Москве. Завод работает на рынке свежеобжаренного кофе и растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по обжарке кофе и итальянские агломераторы для производства растворимой продукции.</p>
              <p className={!showText ? `${styles.aboutTextTablet}` : `${styles.aboutTextTablet} ${styles.show}`}>Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и представительство в Москве. Завод работает на рынке свежеобжаренного кофе и растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по обжарке кофе и итальянские агломераторы для производства растворимой продукции.</p>
            </div>
            <span className={!showText ? `${styles.aboutLink}` : `${styles.aboutLink} ${styles.show}`} onClick={() => setShowText(!showText)}>{!showText ? 'Читать полностью' : 'Скрыть'}</span>

            <div className={styles.wrapperForm}>
              <form ref={pack} className={styles.formPackage}>
                <label htmlFor='100' className={styles.packageLabel}>
                  <input id='100' className={styles.packageInput} type="radio" name='package'></input>
                  <span className={styles.customRadio}></span>
                  <p>100 г.</p>
                </label>
                <label htmlFor='150' className={styles.packageLabel}>
                  <input id='150' className={styles.packageInput} type="radio" name='package'></input>
                  <span className={styles.customRadio}></span>
                  <p>150 г.</p>
                </label>
                <label htmlFor='165' className={styles.packageLabel}>
                  <input id='165' className={styles.packageInput} type="radio" name='package'></input>
                  <span className={styles.customRadio}></span>
                  <p>165 г.</p>
                </label>
                <label htmlFor='200' className={styles.packageLabel}>
                  <input id='200' className={styles.packageInput} type="radio" name='package'></input>
                  <span className={styles.customRadio}></span>
                  <p>200 г.</p>
                </label>
              </form>
            </div>
            <div className={styles.buttons}>
              <div className={styles.wrapperSelect}>
                <select ref={pack} name="target" className={styles.select}>
                  <option>100 г.</option>
                  <option>150 г.</option>
                  <option>165 г.</option>
                  <option>200 г.</option>
                </select>
              </div>
              <div className={styles.itemAmount}>
                <button onClick={() => removeOneCard()}>-</button>{openOneProduct.amount}<button onClick={() => addOneCard()}>+</button>
              </div>
              <div className={styles.buyBtn}>
                <button onClick={(e) => addProduct(e, openOneProduct)}>Купить за {openOneProduct.price * openOneProduct.amount} ₽</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



