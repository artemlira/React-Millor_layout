import React, { useState } from 'react';
import styles from './Production.module.scss';


export default function Production({ arr }) {
  const [openSorting, setOpenSorting] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const show = () => {
    setShowAll(!showAll);
  }
  return (

    <section className={styles.production}>

      <div className="container">
        <div className={styles.link}>
          <a
            onClick={() => setOpenSorting(true)}
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
        <div className={styles.laptop}>
          <div className={styles.container} >
            {!showAll
              ?
              arr.map((item, index) => index < 12 && <div key={Math.random() * 100}>{item}</div>)
              :
              arr.map(item => <div key={Math.random() * 100}>{item}</div>)
            }
          </div>
          {arr.length > 12 && <button onClick={() => show()} className={styles.btn}>{!showAll ? 'Показать еще' : 'Скрыть'}</button>}
        </div>
        <div className={styles.tablet}>
          <div className={styles.container} >
            {arr.map((item, index) => index < 6 && <div key={Math.random() * 100}>{item}</div>)}
          </div>
          <button className={styles.btn}>Показать еще</button>
        </div>
        <div className={styles.phone}>
          <div className={styles.container} >
            {arr.map((item, index) => index < 3 && <div key={Math.random() * 100}>{item}</div>)}
          </div>
          <button className={styles.btn}>Показать еще</button>

        </div>
      </div>

    </section>

  );
}



