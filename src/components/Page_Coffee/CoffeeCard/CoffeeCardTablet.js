import React, { useContext, useState } from 'react';
import styles from './CoffeeCard.module.scss';
import { MillorContext } from './../../Context';
import { discountItemPics } from '../../ImagesDB.js';

export default function CoffeeCardTablet() {

  const { pack, addOneCard, removeOneCard, addProduct, openOneProduct } = useContext(MillorContext);


  const [showText, setShowText] = useState(false);

  return (
    <section className={styles.coffeeCardTablet}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.wrapperAbout}>
            <div>
              <div className={styles.reviews}>
                <div className={styles.reviewsStars}><img src={discountItemPics[3]} alt="stars" /></div>
                <p className={styles.reviewsText}>{openOneProduct.rating}.0 <span>(32 отзыва)</span></p>
              </div>
              <div className={styles.special}>
                {openOneProduct.special.map(i => <p key={Math.random() * 10}>{i}</p>)}
              </div>
              <div className={styles.coffeeBeans} >
                <img src={discountItemPics[1]} alt="coffee beans" />
              </div>
            </div>
            <div className={styles.image}>
              <img src={openOneProduct.image} alt={openOneProduct.title} />
            </div>
          </div>
          <div className={styles.wrapperTitle}>
            <div>
              <h6 className={styles.title}>{openOneProduct.title}</h6>
              <p className={styles.methodProcessing}>{openOneProduct.methodProcessing}, натуральная, смесь</p>
            </div>
            <div className={styles.contantAbout}>
              <p className={!showText ? `${styles.aboutText}` : `${styles.aboutText} ${styles.show}`}>Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и представительство в Москве. Завод работает на рынке свежеобжаренного кофе и растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по обжарке кофе и итальянские агломераторы для производства растворимой продукции.</p>
            </div>
            <span className={!showText ? `${styles.aboutLink}` : `${styles.aboutLink} ${styles.show}`} onClick={() => setShowText(!showText)}>{!showText ? 'Читать полностью' : 'Скрыть'}</span>
          </div>
          <div className={styles.properties}>
            <div className={styles.acid}>
              <p className={styles.acidText}>Кислинка</p>
              <img className={styles.acidImg} src={discountItemPics[2]} alt="acid" />
            </div>
            <div className={styles.bitterness}>
              <p className={styles.bitternessText}>Горчинка</p>
              <img className={styles.bitternessImg} src={discountItemPics[2]} alt="bitterness" />
            </div>
            <div className={styles.saturation}>
              <p className={styles.saturationText}>Насыщенность</p>
              <img className={styles.saturationImg} src={discountItemPics[2]} alt="saturation" />
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.selectAmount}>
              <div className={styles.wrapperSelect}>
                <select ref={pack} name="target" className={styles.select}>
                  <option>250 г.</option>
                  <option>1000 г.</option>
                </select>
              </div>
              <div className={styles.itemAmount}>
                <button onClick={() => removeOneCard(openOneProduct)}>-</button>{openOneProduct.amount}<button onClick={() => addOneCard(openOneProduct)}>+</button>
              </div>
            </div>
            <div className={styles.buyBtn}>
              <button onClick={(e) => addProduct(e, openOneProduct)}>Купить за {openOneProduct.price * openOneProduct.amount} ₽</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
