import React from 'react';
import '../style/header.scss';
import logo from '../images/logo.svg';
import { icons } from './ImagesDB';

export default function Header() {
  return (
    <header className="header">
      <div className="heder__container container">
        <div className="logo">
          <img src={logo} alt="logo Millor" />
        </div>
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/">Каталог товаров</a>
            </li>
            <li className="nav__item">
              <a href="/">Блог</a>
            </li>
            <li className="nav__item">
              <a href="/">Контакты</a>
            </li>
          </ul>
        </nav>
        <div className="header__icons">
          <div className="header__icon">
            <img src={icons[0]} alt="search icon" />
          </div>
          <div className="header__icon">
            <img src={icons[1]} alt="basket icon" />
          </div>
          <div className="header__icon">
            <img src={icons[2]} alt="user icon" />
          </div>
        </div>
      </div>
    </header>
  )
}
