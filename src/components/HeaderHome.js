import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.scss';
import logo from '../images/logo.svg';
import { icons } from './ImagesDB';


export default function HeaderHome() {
  return (
    <header className="header">
      <div className="heder__container container">
        <div className="logo">
          <Link to="/"> <img src={logo} alt="logo Millor" /></Link>
        </div>
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/#catalog">Каталог товаров</a>
              {/* <Link to="/">Каталог товаров</Link> */}
            </li>
            <li className="nav__item">
              <Link to="/blog">Блог</Link>
            </li>
            <li className="nav__item">
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
        </nav>
        <div className="header__icons">
          <div className="header__icon">
            <Link to='/'> <img src={icons[0]} alt="search icon" /></Link>
          </div>
          <div className="header__icon">
            <Link to="/basket"><img src={icons[1]} alt="basket icon" /></Link>
          </div>
          <div className="header__icon">
            <Link to="/personal_area"><img src={icons[2]} alt="personal Area icon" /></Link>
          </div>
        </div>
      </div>
    </header>
  )
}
