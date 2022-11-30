import React from 'react';
import Production from './../components/Production/Production';
import Subscription from './../components/Subscription/Subscription';
import { itemsWendingProducts } from '../components/TextsDB.js';
import WendingRange from '../components/Page_WendingProducts/WendingRange/WendingRange';
import { Outlet, useLocation } from 'react-router';


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
            <Subscription />
          </div>
          :
          <Outlet />
      }
    </>
  );
}



