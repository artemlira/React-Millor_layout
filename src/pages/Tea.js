import React from 'react'
import TeaCard from '../components/Page_Tea/TeaCard/TeaCard';
import TeaPath from '../components/Page_Tea/TeaPath/TeaPath';
import TeaSubscription from '../components/Page_Tea/TeaSubscription/TeaSubscription'
import CoffeeNav from './../components/Page_Coffee/CoffeeNav/CoffeeNav';
import CoffeeReviews from './../components/Page_Coffee/CoffeeReviews/CoffeeReviews';

export default function Tea() {
  return (
    <article className='tea'>
      <TeaPath />
      <TeaCard />
      <CoffeeNav />
      <CoffeeReviews />
      <TeaSubscription />
    </article>
  )
}
