import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { icons } from '../ImagesDB';
import './search.scss';


export default function Search() {
  return (
    <header className="header">
      <div className="heder__container container">
        <div className="logo">
          <Link to="/"> <img src={logo} alt="logo Millor" /></Link>
        </div>
        <form action="">
          <input type="text" />
        </form>
        <div className="header__icons">
          <div className="header__icon">
            <Link to="/search"> <img src={icons[0]} alt="search icon" /></Link>
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
