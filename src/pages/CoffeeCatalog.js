import React, { useContext } from 'react';
// import Subscription from './../components/Subscription/Subscription';
import Production from '../components/Production/Production';
import ProductRange from './../components/Page_CoffeeCatalog/ProductRange/ProductRange';
// import { discountItemCoffee } from '../components/TextsDB';
import { Outlet } from 'react-router';
import { MillorContext } from './../components/Context';
import CoffeeCatalogMain from './../components/Page_CoffeeCatalog/CoffeeCatalogMain/CoffeeCatalogMain';


export default function CoffeeCatalog() {
  const { location, discountItemCoffee } = useContext(MillorContext);

  return (
    <>
      {
        location.pathname === "/catalog/coffee_catalog"
          ?
          <div className='coffeeCatalog'>
            <ProductRange />
            <Production arr={discountItemCoffee} key={Math.random() * 100} link='coffee' />
            <CoffeeCatalogMain />
          </div>
          :
          <Outlet />
      }
    </>
  );
}

