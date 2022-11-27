import React from 'react';
import ProductRange from './../components/ProductRange/ProductRange';
import Subscription from './../components/Subscription/Subscription';
import Production from './../components/Production/Production';



export default function CoffeeCatalog() {
  return (
    <div className='coffeeCatalog'>
      <ProductRange />
      <Production />
      <Subscription />
    </div>
  );
}

