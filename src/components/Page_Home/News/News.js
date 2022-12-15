import React from 'react';
import styles from './News.module.scss';
import { Link } from 'react-router-dom';
import image from '../../../images/news/01.png';
import NewsListSlider from './NewsListSlider';


export default function News() {
  return (
    <section className={styles.news}>
      <div className="container">
        <div className={styles.container}>
          <header className={styles.header}>
            <h4 className={styles.title}>Новости компании</h4>
            <Link to="/blog" className={styles.link}>Читать все</Link>
          </header>
          <div className={styles.wrapper}>
            <ul className={styles.list}>
              <li className={styles.box1}>
                <div className={styles.wrapperItem}>
                  <div className={styles.img}>
                    <img src={image} alt="A pack of coffee" />
                  </div>
                  <div className={styles.about}>
                    <h5 className={styles.aboutTitle}>Танзанийский кофе. Откуда он взялся и почему мы его так любим?</h5>
                    <div className={styles.wrapperText}>
                      <p className={styles.text}>Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.</p>
                      <p>Но наш интерес вызван не столько природными красотами, сколько кофе...</p>
                    </div>
                    <a href="/" className={styles.aboutLink}>Подробнее</a>
                  </div>
                </div>
              </li>
              <li className={styles.box2}>
                <div className={styles.wrapperItem}>
                  <div className={styles.about}>
                    <h5 className={styles.aboutTitle}>Африканский кофе Кения АА</h5>
                    <p className={styles.text}>Кения АА – у этого кофе, из африканской страны, репутация одного из самых вкусных и ярких сортов в мире. Многие обжарщики высоко оценивают местные разновидности высокогорной арабики.</p>
                    <a href="/" className={styles.aboutLink}>Подробнее</a>
                  </div>
                </div>
              </li>
              <li className={styles.box3}>
                <div className={styles.wrapperItem}>
                  <div className={styles.about}>
                    <h5 className={styles.aboutTitle}>Африканский кофе Кения АА</h5>
                    <p className={styles.text}>Кения АА – у этого кофе, из африканской страны, репутация одного из самых вкусных и ярких сортов в мире. Многие обжарщики высоко оценивают местные разновидности высокогорной арабики.</p>
                    <a href="/" className={styles.aboutLink}>Подробнее</a>
                  </div>
                </div>
              </li>
              <li className={styles.box4}>
                <div className={styles.wrapperItem}>
                  <div className={styles.img}>
                    <img src={image} alt="A pack of coffee" />
                  </div>
                  <div className={styles.about}>
                    <h5 className={styles.aboutTitle}>Танзанийский кофе. Откуда он взялся и почему мы его так любим?</h5>
                    <div className={styles.wrapperText}>
                      <p className={styles.text}>Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.</p>
                      <p>Но наш интерес вызван не столько природными красотами, сколько кофе...</p>
                    </div>
                    <a href="/" className={styles.aboutLink}>Подробнее</a>
                  </div>
                </div>
              </li>
            </ul>
            <NewsListSlider />
          </div>
          <div className={styles.wrapperLinkTablet}>
            <Link to="/blog" className={styles.linkTablet}>Читать все</Link>
          </div>

        </div>
      </div>
    </section>
  );
}



