import React, { useContext } from 'react';
import styles from './ContactsMain.module.scss';
import { MillorContext } from './../../Context';
import ContactShopsItem from './ContactShopsItem';
import { itemShopsContacts } from '../../TextsDB';


export default function ContactsMain() {
  const data = useContext(MillorContext);

  return (
    <section className={styles.contactsMain}>
      <div className="container">
        <div className={styles.container}>
          <div className={data.location.pathname === '/contacts' ? styles.aboutContacts : styles.aboutShops}>
            {data.location.pathname === '/contacts' &&
              <>
                <div className={styles.contacts}>
                  <h6 className={styles.titleContacts}>Связаться с нами:</h6>
                  <a className={styles.contactsPhone} href="tel:+74012375343" >+7 (401) 237 53 43</a>
                  <a className={styles.contactsMail} href="mailto:Import@kldrefine.com">Import@kldrefine.com</a>
                </div>
                <div className={styles.legalAddress}>
                  <h6 className={styles.titleLegalAddress}>Юридический адрес:</h6>
                  <p className={styles.legalAddressText}>Российская, Федерация, 238310, Калининградская область, Гурьевский район, поселок Васильково, улица Шатурская, дом 4А</p>
                </div>
                <div className={styles.warehouse}>
                  <h6 className={styles.titleWarehouse}>Адрес склада:</h6>
                <p className={styles.warehouseText}>Московская область, Балашиха, Западная промзона, Шоссе энтузиастов 1</p>
                </div>
              </>
            }

            {data.location.pathname === '/shops' &&
              itemShopsContacts.map(item =>
                < ContactShopsItem key={Math.random() * 10}
                  styles={styles}
                  city={item.city}
                  address={item.address}
                />
              )
            }

          </div>
          <div className={styles.img}></div>
        </div>
      </div>
    </section>
  );
}



