import React from 'react'
import Catalog from './Catalog/Catalog';
// import HeaderHome from './HeaderHome';
import CatalogSlider from './CatalogSlider/CatalogSlider';

export default function Home() {
  return (
    <>
      <CatalogSlider />
      <Catalog />
    </>
  )
}
