import React from 'react'
import TeaCard from '../components/Page_Tea/TeaCard/TeaCard';
import TeaDescription from '../components/Page_Tea/TeaDescription/TeaDescription';
import TeaNav from '../components/Page_Tea/TeaNav/TeaNav';
import TeaPath from '../components/Page_Tea/TeaPath/TeaPath';
import TeaSubscription from '../components/Page_Tea/TeaSubscription/TeaSubscription'
import CoffeeReviews from './../components/Page_Coffee/CoffeeReviews/CoffeeReviews';

export default function Tea() {
  return (
    <article className='tea'>
      <TeaPath />
      <TeaCard />
      <TeaNav />
      <TeaDescription />
      <CoffeeReviews />
      <TeaSubscription />
    </article>
  )
}
