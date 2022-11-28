import React from 'react';
import Subscription from './../components/Subscription/Subscription';
import TeaRange from '../components/Page_TeaCatalog/TeaRange/TeaRange';
import Production from './../components/Production/Production';
import { itemsTea } from '../components/TextsDB';


export default function TeaCatalog() {
  return (
    <div className="teaCatalog">
      <TeaRange />
      <Production arr={itemsTea} key={Math.random() * 100} />
      <Subscription />
    </div>
  );
}



