import React from 'react';
import styles from './Catalog.module.scss';
import CatalogItem from '../CatalogItem/CatalogItem';
import { catalog } from '../ImagesDB';


export default function Catalog() {
  return (
    <section id='catalog' className={styles.catalog}>
      <div className="container">
        <h3 className={styles.title}>Каталоги нашей продукции</h3>
        <div className={styles.items}>
          {catalog.map((item) =>
            <CatalogItem
              key={Math.random() * 100}
              image={item.img}
              text={item.text}
              textButton={item.btn}
              link={item.link}
            />
          )}
        </div>
      </div>
    </section>
  );
}
