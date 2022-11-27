import React, { useState } from 'react';
import styles from './Production.module.scss';
import DiscountItem from './../DiscountItem/DiscountItem';


export default function Production() {

  const [openSorting, setOpenSorting] = useState(false);

  return (
    <section className={styles.production}>
      <div className="container">
        <div className={styles.link}>
          <a onClick={() => setOpenSorting(true)}
            href='#sorting'>Сортировка</a>
        </div>

        {openSorting && <form action="/" className={styles.form}>

          <select name="target" className={styles.select}>
            <option id='sorting'>По возрастанию цены</option>
            <option>По убыванию цены</option>
            <option>По рейтингу</option>
            <option>По кислотности</option>
          </select>
        </form>}
        <div className={styles.container}>
          <DiscountItem />
          <DiscountItem />
          <DiscountItem sale={true} />
          <DiscountItem />
          <DiscountItem />
          <DiscountItem />
          <DiscountItem />
          <DiscountItem />
          <DiscountItem />
          <DiscountItem />
          <DiscountItem />
          <DiscountItem />
        </div>
        <button className={styles.btn}>Показать еще</button>
      </div>
    </section>
  );
}



