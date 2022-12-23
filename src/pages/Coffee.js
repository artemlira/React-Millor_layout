import React from 'react'
import CoffeeSubscription from './../components/Page_Coffee/CoffeeSubscription/CoffeeSubscription';
import CoffeeCard from './../components/Page_Coffee/CoffeeCard/CoffeeCard';
import CoffeePath from './../components/Page_Coffee/CoffeePath/CoffeePath';
import CoffeeNav from '../components/Page_Coffee/CoffeeNav/CoffeeNav';

export default function Coffee() {
  return (
    <article className='coffee'>
      <CoffeePath />
      <CoffeeCard />
      <CoffeeNav />
      <CoffeeSubscription />
    </article>
  )
}
