import React from 'react';
import HealthyRange from './../components/Page_HealthyDiet/HealthyRange/HealthyRange';
import Production from './../components/Production/Production';
import { itemsHealthyDiet } from '../components/TextsDB.js';
import { Outlet, useLocation } from 'react-router';
import CoffeeCatalogMain from './../components/Page_CoffeeCatalog/CoffeeCatalogMain/CoffeeCatalogMain';


export default function HealthyDiet() {

  const location = useLocation();

  return (
    <>
      {
        location.pathname === "/catalog/healthy_diet"
          ?
          <div className="healthyDiet">
            <HealthyRange />
            <Production arr={itemsHealthyDiet} link='healthy_eating' />
            <CoffeeCatalogMain />
          </div>
          :
          <Outlet />


      }
    </>
  );
}



