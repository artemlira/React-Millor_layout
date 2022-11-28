import React from 'react';
import styles from './ProductRange.module.scss';
import { productRangeIcons, productRangePic } from '../../ImagesDB';
import RangeItem from './RangeItem';
import cupCoffee from '../../../images/Catalog Coffee/Cup_of_coffee.png';
import RangeIcon from './RangeIcon';
import { geography, acid, methodProcessing, special, typeCoffee } from '../../TextsDB.js';
// import { ReactComponent as Img } from '../../images/Catalog Coffee/Cup_of_coffee.svg';


export default function ProductRange() {
  return (
    <section className={styles.productRange}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.img}>
            <img src={cupCoffee} alt="cup of coffee" />
          </div>
          <ul className={styles.navigation}>
            <li className={styles.navigationItem}>Главная</li>
            <li className={styles.navigationItem}>Каталог товаров</li>
            <li className={styles.navigationItem}>Свежеобжаренный кофе</li>
          </ul>
          <h4 className={styles.title}>Свежеобжаренный кофе</h4>
          <div className={styles.range}>
            <div className={styles.rangeIcons}>
              <h5 className={styles.iconsTitle}>Степень обжарки</h5>
              <form name='range'>
                <ul className={styles.iconsList}>

                  {productRangePic.map(item =>
                    <RangeItem
                      key={Math.random() * 100}
                      img={item}
                      styles={styles}
                      name='range' />
                  )}

                </ul>
              </form>
            </div>
            <div className={styles.rangeAbout}>
              <div>
                <h6 className={styles.aboutTitle}>География</h6>
                <form name='geography'>
                  <ul>
                    {geography.map(item =>
                      <RangeItem
                        key={Math.random() * 100}
                        text={item}
                        styles={styles}
                        name='geography' />)}
                  </ul>
                </form>
              </div>
              <div>
                <h6 className={styles.aboutTitle}>Кислинка</h6>
                <form name='acid'>
                  <ul>
                    {acid.map(item =>
                      <RangeItem
                        key={Math.random() * 100}
                        text={item}
                        styles={styles}
                        name='acid' />)}
                  </ul>
                </form>
                <h6 className={styles.aboutTitle}>Способ обработки</h6>
                <form name='methodProcessing'>
                  <ul>
                    {methodProcessing.map(item =>
                      <RangeItem
                        key={Math.random() * 100}
                        text={item}
                        styles={styles}
                        name='methodProcessing' />)}
                  </ul>
                </form>
              </div>
              <div>
                <h6 className={styles.aboutTitle}>Особые</h6>
                <form name='special'>
                  <ul>
                    {special.map(item =>
                      <RangeItem
                        key={Math.random() * 100}
                        text={item}
                        styles={styles}
                        name='special' />)}
                  </ul>
                </form>
              </div>
              <div>
                <h6 className={styles.aboutTitle}>Вид кофе</h6>
                <form name='typeCoffee'>
                  <ul>
                    {typeCoffee.map(item =>
                      <RangeItem
                        key={Math.random() * 100}
                        text={item}
                        styles={styles}
                        name='typeCoffee' />)}
                  </ul>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.icons}>
            <ul className={styles.items}>

              {productRangeIcons.map(item =>
                <RangeIcon key={Math.random() * 100} img={item.img} text={item.text} styles={styles} />
              )}

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}



