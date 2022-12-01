import React, { useContext } from 'react';
import styles from './BlogTraining.module.scss';
import { itemsBlogTraining } from '../../TextsDB.js';
import TrainingItem from './TrainingItem';
import { MillorContext } from './../../Context';


export default function BlogTraining() {
  const data = useContext(MillorContext);

  return (
    <section className={styles.blogTraining} ref={data.scrollTo}>
      <div className="container">
        <div id='training' className={styles.container}>
          <h5 className={styles.title}>Как сварить кофе в турке:</h5>
          {
            itemsBlogTraining.map(item =>
              <TrainingItem
                key={Math.random() * 100}
                img={item.img}
                title={item.title}
                styles={styles}
                text={item.text}
              />
            )
          }
        </div>
      </div>
    </section>
  );
}



