import React from 'react';
import Subscription from './../components/Subscription/Subscription';
import HealthyRange from './../components/Page_HealthyDiet/HealthyRange/HealthyRange';
import Production from './../components/Production/Production';
import { itemsHealthyDiet } from '../components/TextsDB.js';
import { Outlet, useLocation } from 'react-router';


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
            <Subscription />
          </div>
          :
          <Outlet />


      }
    </>
  );
}



