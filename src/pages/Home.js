import React from 'react'
import Catalog from '../components/Catalog/Catalog';
import DiscountGoods from '../components/DiscountGoods/DiscountGoods';
import Slider from '../components/Slider/Slider';
import Advantages from './../components/Advantages/Advantages';

export default function Home() {
  return (
    <>
      <Slider />
      <Catalog />
      <DiscountGoods />
      <Advantages />
    </>
  )
}
