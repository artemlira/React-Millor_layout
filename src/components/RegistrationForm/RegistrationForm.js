import React, { useContext } from 'react';
import styles from './RegistrationForm.module.scss';
import { MillorContext } from './../Context';


export default function RegistrationForm() {
  const { setOpenRegistrationForm } = useContext(MillorContext);
  return (
    <section className={styles.registrationForm}>
      <div className="container">
        <div className={styles.container}>
          <span onClick={() => setOpenRegistrationForm(false)}>x</span>
        </div>
      </div>
    </section>
  );
}



