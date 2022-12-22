import React, { useContext } from 'react';
import styles from './CoffeeCard.module.scss';
import { MillorContext } from './../../Context';
import { discountItemPics } from '../../ImagesDB.js';
import CoffeeCardTablet from './CoffeeCardTablet';


export default function CoffeeCard() {

  const { amountBasketProducts, addCount, removeCount, openOneProduct } = useContext(MillorContext);

  return (
    <>
      <section className={styles.coffeeCard}>
        <div className="container">
          <div className={styles.container}>
            <div className={styles.image}
              style={{ background: `url('../../${openOneProduct.image}') center/contain no-repeat` }}>
            </div>
            <div className={styles.contant}>
              <div className={styles.coffeeBeans} >
                <img src={`../../${discountItemPics[1]}`} alt="coffee beans" />
              </div>
              <div className={styles.wrapperTitle}>
                <div>
                  <h6 className={styles.title}>{openOneProduct.title}</h6>
                  <p className={styles.methodProcessing}>{openOneProduct.methodProcessing}, натуральная, смесь</p>
                </div>
                <div className={styles.special}>
                  {openOneProduct.special.map(i => <p key={Math.random() * 10}>{i}</p>)}
                </div>
              </div>
              <div className={styles.reviews}>
                <div className={styles.reviewsStars}><img src={`../../${discountItemPics[3]}`} alt="stars" /></div>
                <p className={styles.reviewsText}>{openOneProduct.rating}.0 <span>(32 отзыва)</span></p>
              </div>
              <div className={styles.contantAbout}>
                <p className={styles.aboutText}>Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и представительство в Москве. Завод работает на рынке свежеобжаренного кофе и растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по обжарке кофе и итальянские агломераторы для производства растворимой продукции.</p>
              </div>
              <div className={styles.properties}>
                <div className={styles.acid}>
                  <p className={styles.acidText}>Кислинка</p>
                  <img className={styles.acidImg} src={`../../${discountItemPics[2]}`} alt="" />
                </div>
                <div className={styles.bitterness}>
                  <p className={styles.bitternessText}>Горчинка</p>
                  <img className={styles.bitternessImg} src={`../../${discountItemPics[2]}`} alt="" />
                </div>
                <div className={styles.saturation}>
                  <p className={styles.saturationText}>Насыщенность</p>
                  <img className={styles.saturationImg} src={`../../${discountItemPics[2]}`} alt="" />
                </div>
              </div>
              <div>
                <form className={styles.formPackage}>
                  <label htmlFor='250' className={styles.packageLabel}>
                    <input id='250' className={styles.packageInput} type="radio" name='package'></input>
                    <span className={styles.customRadio}></span>
                    <p>250 г.</p>
                  </label>
                  <label htmlFor='1000' className={styles.packageLabel}>
                    <input id='1000' className={styles.packageInput} type="radio" name='package'></input>
                    <span className={styles.customRadio}></span>
                    <p>1000 г.</p>
                  </label>
                </form>
              </div>
              <div className={styles.buttons}>
                <div className={styles.itemAmount}>
                  <button onClick={() => removeCount()}>-</button>{amountBasketProducts}<button onClick={() => addCount()}>+</button>
                </div>
                <div className={styles.buyBtn}>
                  <button>Купить за {openOneProduct.price * amountBasketProducts} ₽</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CoffeeCardTablet />
    </>
  );
}



