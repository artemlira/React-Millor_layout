import React, { useContext } from 'react';
import styles from './BlogQuestions.module.scss';
import { MillorContext } from './../../Context';
import img from '../../../images/Blog/cup_coffee.png';
import { itemQuestion } from './../../TextsDB';
import QuestionItem from './QuestionItem';


export default function BlogQuestions() {
  const data = useContext(MillorContext);
  return (
    <section className={styles.blogQuestions} ref={data.scrollTo}>
      <div className="container">
        <div className={styles.container}>
          <h5 className={styles.title}>Частые вопросы:</h5>
          <div className={styles.wrapper}>
            <div className={styles.img}>
              <img src={img} alt="Cup of Coffee" />
            </div>
            <div className={styles.questions}>
              <ul className={styles.items}>
                {itemQuestion.map(item =>
                  <QuestionItem key={Math.random() * 10}
                    styles={styles}
                    title={item.title}
                    text={item.text}
                  />
                )}

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



