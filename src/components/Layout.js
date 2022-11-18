import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';


export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>2022</footer>


    </>
  )
}
