import React from 'react';
import Subscription from './../components/Subscription/Subscription';
import TeaRange from '../components/Page_TeaCatalog/TeaRange/TeaRange';
import Production from './../components/Production/Production';
import { itemsTea } from '../components/TextsDB';
import { Outlet, useLocation } from 'react-router';


export default function TeaCatalog() {

  const location = useLocation();

  return (
    <>
      {
        location.pathname === "/catalog/tea_catalog"
          ?
          <div className="teaCatalog">
            <TeaRange />
            <Production arr={itemsTea} key={Math.random() * 100} link='tea' />
            <Subscription />
          </div>
          :
          <Outlet />
      }
    </>
  );
}



