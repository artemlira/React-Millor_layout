import React from 'react';
import { Link } from 'react-router-dom';

export default function CatalogItem({ image, text, textButton, link }) {
  return (
    <div className='catalog__item'>
      <img className='item__image' src={image} alt="" />
      <p className='item__text'>{text}</p>
      <button className='item__btn'><Link to={link}>{textButton}</Link></button>
    </div>
  )
}
