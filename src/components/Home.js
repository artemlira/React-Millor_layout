import React from 'react'
import Catalog from './Catalog/Catalog';
import DiscountGoods from './DiscountGoods/DiscountGoods';
import Slider from './Slider/Slider';

export default function Home() {
  return (
    <>
      <Slider />
      <Catalog />
      <DiscountGoods />
    </>
  )
}
