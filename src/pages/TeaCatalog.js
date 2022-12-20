import React, { useContext } from 'react';
import TeaRange from '../components/Page_TeaCatalog/TeaRange/TeaRange';
import Production from './../components/Production/Production';
import { Outlet } from 'react-router';
import CoffeeCatalogMain from './../components/Page_CoffeeCatalog/CoffeeCatalogMain/CoffeeCatalogMain';
import { MillorContext } from './../components/Context';


export default function TeaCatalog() {

  const { itemsTea, location } = useContext(MillorContext);
  
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



