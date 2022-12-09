import React from 'react';
import TeaRange from '../components/Page_TeaCatalog/TeaRange/TeaRange';
import Production from './../components/Production/Production';
import { itemsTea } from '../components/TextsDB';
import { Outlet, useLocation } from 'react-router';
import CoffeeCatalogMain from './../components/Page_CoffeeCatalog/CoffeeCatalogMain/CoffeeCatalogMain';


export default function TeaCatalog() {

  const location = useLocation();

  return (
    <>
      {
        location.pathname === "/catalog/tea_catalog"
          ?
          <div className="teaCatalog">
            <TeaRange />
            <Production arr={itemsTea} key={Math.random() * 100} />
            <CoffeeCatalogMain />
          </div>
          :
          <Outlet />
      }
    </>
  );
}



