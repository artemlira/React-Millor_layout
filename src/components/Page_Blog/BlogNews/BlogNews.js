import React, { useContext } from 'react';
import styles from './BlogNews.module.scss';
import NewsItem from './NewsItem';
import { MillorContext } from './../../Context';
import { itemsBlogNews, itemsBlogNewsNav } from './../../TextsDB';
import NewsNavItem from './NewsNavItem';


export default function BlogNews() {

  const data = useContext(MillorContext);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className={styles.blogNews} ref={data.scrollTo}>
      <div id='news' className="container">
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.title}>
              <h6>Новости:</h6>
            </div>
            <nav className={styles.nav}>
              <ul className={styles.navItems}>
                {itemsBlogNewsNav.map(item =>
                  <NewsNavItem key={Math.random() * 10}
                    styles={styles}
                    text={item} />
                )}
              </ul>
            </nav>
          </header>
          {
            itemsBlogNews.map(item =>
              <NewsItem
                key={Math.random() * 10}
                styles={styles}
                img={item.img}
                title={item.title}
                text={item.text}
                author={item.author}
                link={item.link}
              />
            )}
          <a onClick={(e) => handleSubmit(e)} href='/'> <button className={styles.btn}>Показать еще</button></a>

        </div>
      </div>
    </section>
  );
}



