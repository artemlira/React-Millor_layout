import React from 'react';
import Production from './../components/Production/Production';
import { itemsWendingProducts } from '../components/TextsDB.js';
import WendingRange from '../components/Page_WendingProducts/WendingRange/WendingRange';
import { Outlet, useLocation } from 'react-router';
import CoffeeCatalogMain from './../components/Page_CoffeeCatalog/CoffeeCatalogMain/CoffeeCatalogMain';


export default function WendingProducts() {

  const location = useLocation();

  return (
    <>
      {
        location.pathname === "/catalog/wending_products"
          ?
          <div className="wendingProducts">
            <WendingRange />
            <Production arr={itemsWendingProducts} key={Math.random() * 100} link='wending' />
            <CoffeeCatalogMain/>
          </div>
          :
          <Outlet />
      }
    </>
  );
}



