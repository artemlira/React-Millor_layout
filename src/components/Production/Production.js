import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Production.module.scss';


export default function Production({ arr, link }) {

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
        <Link to={link}>
          <div className={styles.container}>
            {arr.map(item =>

              <div key={Math.random() * 100}>
                {item}
              </div>

            )}
          </div>
        </Link >

          <button className={styles.btn}>Показать еще</button>
        </div>

      </section>
   
  );
}



