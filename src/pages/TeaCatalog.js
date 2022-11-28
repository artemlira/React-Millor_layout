import React from 'react';
import Subscription from './../components/Subscription/Subscription';
import TeaRange from '../components/Page_TeaCatalog/TeaRange/TeaRange';


export default function TeaCatalog() {
  return (
    <div className="teaCatalog">
      <TeaRange />
      <Subscription />
    </div>
  );
}



