import React from 'react'
import CoffeeNav from './../components/Page_Coffee/CoffeeNav/CoffeeNav';
import CoffeeSubscription from './../components/Page_Coffee/CoffeeSubscription/CoffeeSubscription';
import CoffeeCard from './../components/Page_Coffee/CoffeeCard/CoffeeCard';

export default function Coffee() {
  return (
    <article className='coffee'>
      <CoffeeNav />
      <CoffeeCard />
      <CoffeeSubscription />
    </article>
  )
}
