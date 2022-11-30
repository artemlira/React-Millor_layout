import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Catalog from '../components/Catalog/Catalog';

export default function CatalogPage() {

  const location = useLocation();

  return (
    <div className='catalog'>
      {location.pathname === "/catalog" ? <Catalog /> : <Outlet />}
    </div>
  )
}
