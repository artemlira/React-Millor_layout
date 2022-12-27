import React, { useContext } from 'react';
import styles from './RegistrationForm.module.scss';
import { MillorContext } from './../Context';
import img from '../../images/RegistratiomForm/coffee.png';
import logo from '../../images/RegistratiomForm/logo.png';
import { motion, AnimatePresence } from 'framer-motion';
import RegistrationFormTablet from './RegistrationFormTablet';

export default function RegistrationForm() {
  const { openRegistrationForm, setOpenRegistrationForm } = useContext(MillorContext);
  return (
    <>

      {openRegistrationForm && <motion.section

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5
        }}
        className={styles.registrationForm}>
        <div className="container">
          <AnimatePresence>
            <motion.div
              key="modal"
              initial={{ y: "300%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.container}>
              <span onClick={() => setOpenRegistrationForm(false)}>x</span>
              <div className={styles.greetings}>
                <div className={styles.greetingsImg}>
                  <img src={img} alt="coffee" />
                </div>
                <div className={styles.greetingsTextWrapper}>
                  <h6 className={styles.greetingsTitle}>Добро пожаловать!</h6>
                  <p className={styles.greetingsText}>Уже есть аккаунт?</p>
                </div>
              </div>

              <div className={styles.registration}>
                <div className={styles.logo}>
                  <img src={logo} alt="logo" />
                </div>
                <h6 className={styles.registrationTitle}>Регистрация</h6>
                <p className={styles.registrationText}>Зарегистрируйтесь на сайте, чтобы первым получать скидки и узнавать акционные предложения!</p>
                <ul className={styles.registrationList}>
                  <li className={styles.registrationItem}><input type="text" placeholder='Имя и Фамилия' /></li>
                  <li className={styles.registrationItem}><input type="email" placeholder='Email' /></li>
                  <li className={styles.registrationItem}><input type="tel" placeholder='Телефон' /></li>
                  <li className={styles.registrationItem}><input className={styles.password} type="password" placeholder='Придумайте пароль' /></li>
                </ul>
                <button className={styles.registrationBtn}>Зарегистрироваться</button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>}
      <RegistrationFormTablet />
    </>
  );
}



