import React, { useState } from 'react';
import styles from './Production.module.scss';
import { motion } from 'framer-motion';



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
          <motion.div
            initial={{ opacity: 0, y: "100" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100" }}
            transition={{ duration: 1 }}
            className={styles.container} >
            {!showAll
              ?
              arr.map((item, index) => index < 12 && <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={Math.random() * 100}>{item}</motion.div>)
              :
              arr.map(item => <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={Math.random() * 100}>{item}</motion.div>)
            }
          </motion.div>
          {arr.length > 12 && <button onClick={() => show()} className={styles.btn}>{!showAll ? 'Показать еще' : 'Скрыть'}</button>}
        </div>

        <div className={styles.tablet}>
          <motion.div

            initial={{ opacity: 0, y: "100" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100" }}
            transition={{ duration: 1 }}
            className={styles.container} >
            {arr.map((item, index) => index < 6 && <div key={Math.random() * 100}>{item}</div>)}
          </motion.div>
          <button className={styles.btn}>Показать еще</button>
        </div>
        <div className={styles.phone}>
          <motion.div
            initial={{ opacity: 0, y: "100" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100" }}
            transition={{ duration: 1 }}
            className={styles.container} >
            {arr.map((item, index) => index < 3 && <div key={Math.random() * 100}>{item}</div>)}
          </motion.div>
          <button className={styles.btn}>Показать еще</button>

        </div>
      </div>

    </section>

  );
}



