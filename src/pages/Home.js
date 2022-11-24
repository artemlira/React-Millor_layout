import React from 'react'
import AboutWork from '../components/AboutWork/AboutWork';
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
      <AboutWork />
    </>
  )
}
