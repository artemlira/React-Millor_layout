import React, { useState } from 'react';
import styles from './Subscription.module.scss';
import image from '../../images/Subscription/img01.png';


export default function Subscription() {
  const [subscription, setSubscription] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      setSubscription(false);
    }, 1500);
  }

  return (
    <section id='pushes' className={styles.subscription}>
      <div className="container">
        <div className={styles.container}>
          <h5 className={styles.title}>Подписка на новости и рассылку</h5>
          <p className={styles.text}>Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе новых поставок, скидок и эксклюзивных предложений.</p>
          <form action="/">
            {!subscription && <input type="text" className={styles.input} placeholder='Ваш email' />}
            {!subscription
              ?
              <button 
                className={styles.btn}
                onClick={(e) => {
                  setSubscription(!subscription);
                  handleSubmit(e);
                }}
              >Подписаться</button>
              :
              <button className={styles.active}>Спасибо за подписку!</button>
            }
          </form>
          <p id='french-press' className={styles.signature}>Нажимая на кнопку “Подписаться”, вы принимаете правила <a href="/">пользовательского соглашения</a></p>
          <img className={styles.img} src={image} alt="coffee" />
        </div>
      </div>
    </section>
  );
}



