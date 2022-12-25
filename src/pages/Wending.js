import React from 'react'
import CoffeeNav from '../components/Page_Coffee/CoffeeNav/CoffeeNav'
import CoffeeReviews from '../components/Page_Coffee/CoffeeReviews/CoffeeReviews'
import TeaSubscription from '../components/Page_Tea/TeaSubscription/TeaSubscription'

export default function Wending() {
  return (
    <article className='wending'>
      <CoffeeNav />
      <CoffeeReviews/>
      <TeaSubscription/>
    </article>
  )
}
