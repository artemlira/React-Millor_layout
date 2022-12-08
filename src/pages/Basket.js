import React from 'react';
import BasketHeader from '../components/Page_Basket/BasketHeader/BasketHeader';
import BasketProducts from '../components/Page_Basket/BasketProducts/BasketProducts';
import Subscription from './../components/Subscription/Subscription';
import BasketDelivery from './../components/Page_Basket/BasketDelivery/BasketDelivery';


export default function Basket() {
  return (
    <div className="basket">
      <BasketHeader />
      <BasketProducts />
      <BasketDelivery />
      <Subscription />
    </div>
  );
}



