import React from 'react';
import styles from './CatalogItem.module.scss';
import { Link } from 'react-router-dom';


export default function CatalogItem({ image, text, textButton, link }) {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={image} alt="" />
      <p className={styles.text}>{text}</p>
      <button className={styles.btn}><Link to={link}>{textButton}</Link></button>
    </div>
  );
}
