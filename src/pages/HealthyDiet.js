import React from 'react';
import Subscription from './../components/Subscription/Subscription';
import HealthyRange from './../components/Page_HealthyDiet/HealthyRange/HealthyRange';
import Production from './../components/Production/Production';
import { itemsHealthyDiet } from '../components/TextsDB.js';


export default function HealthyDiet() {
  return (
    <div className="healthyDiet">
      <HealthyRange />
      <Production arr={itemsHealthyDiet} key={Math.random() * 100} />
      <Subscription />
    </div>
  );
}



