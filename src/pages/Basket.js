import React from 'react';
import BasketHeader from '../components/Page_Basket/BasketHeader/BasketHeader';
import BasketProducts from '../components/Page_Basket/BasketProducts/BasketProducts';
import Subscription from './../components/Subscription/Subscription';


export default function Basket() {
  return (
    <div className="basket">
      <BasketHeader />
      <BasketProducts />
      <Subscription />
    </div>
  );
}



