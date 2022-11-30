import React from 'react';
import Subscription from './../components/Subscription/Subscription';
import Production from '../components/Production/Production';
import ProductRange from './../components/Page_CoffeeCatalog/ProductRange/ProductRange';
import { discountItemCoffee } from '../components/TextsDB';
import { Outlet, useLocation } from 'react-router';


export default function CoffeeCatalog() {

  const location = useLocation();

  return (
    <>
      {
        location.pathname === "/catalog/coffee_catalog"
          ?
          <div className='coffeeCatalog'>
            <ProductRange />
            <Production arr={discountItemCoffee} key={Math.random() * 100} link='coffee' />
            <Subscription />
          </div>
          :
          <Outlet />
      }
    </>
  );
}

