import React from 'react';
import Subscription from './../components/Subscription/Subscription';
import Production from '../components/Production/Production';
import ProductRange from './../components/Page_CoffeeCatalog/ProductRange/ProductRange';
import { discountItemCoffee } from '../components/TextsDB';


export default function CoffeeCatalog() {
  return (
    <div className='coffeeCatalog'>
      <ProductRange />
      <Production arr={discountItemCoffee} />
      <Subscription />
    </div>
  );
}

