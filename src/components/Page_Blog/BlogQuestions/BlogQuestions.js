import React, { useContext } from 'react';
import styles from './BlogQuestions.module.scss';
import { MillorContext } from './../../Context';


export default function BlogQuestions() {
  const data = useContext(MillorContext);
  return (
    <section className={styles.blogQuestions} ref={data.scrollTo}>
      <div className="container">
        <div className={styles.container}>
          BlogQuestions Component
        </div>
      </div>
    </section>
  );
}



