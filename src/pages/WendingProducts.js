import React from 'react';
import Production from './../components/Production/Production';
import Subscription from './../components/Subscription/Subscription';
import { itemsWendingProducts } from '../components/TextsDB.js';
import WendingRange from '../components/Page_WendingProducts/WendingRange/WendingRange';


export default function WendingProducts() {
  return (
    <div className="wendingProducts">
      <WendingRange />
      <Production arr={itemsWendingProducts} key={Math.random() * 100} />
      <Subscription />
    </div>
  );
}



