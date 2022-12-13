import React, { useContext } from 'react';
import styles from './CatalogItem.module.scss';
import { Link } from 'react-router-dom';
import { MillorContext } from './../Context';


export default function CatalogItem({ image, text, textButton, link, className }) {
  const data = useContext(MillorContext);

  return (
    <div className={className ? styles.sliderWrapper : styles.item}>
      <img className={styles.image} src={image} alt="" />
      <p className={styles.text}>{text}</p>
      <button className={className ? 'btn' : styles.btn}><Link to={data.location.pathname === '/catalog' ? link : `/catalog/${link}`}>{textButton}</Link></button>
    </div>
  );
}
