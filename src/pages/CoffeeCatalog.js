import React from 'react';
import Subscription from './../components/Subscription/Subscription';
import Production from './../components/Page_CoffeeCatalog/Production/Production';
import ProductRange from './../components/Page_CoffeeCatalog/ProductRange/ProductRange';



export default function CoffeeCatalog() {
  return (
    <div className='coffeeCatalog'>
      <ProductRange />
      <Production />
      <Subscription />
    </div>
  );
}

