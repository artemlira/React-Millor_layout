import React from 'react';
import CatalogItem from './CatalogItem';
import { catalog } from './ImagesDB';
import '../style/catalog.scss';

export default function Catalog() {

  return (
    <section id='catalog'>
      <div className="catalog__container container">
        <h3 className="catalog__title">Каталоги нашей продукции</h3>
        <div className="catalog__items">
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
  )
}
