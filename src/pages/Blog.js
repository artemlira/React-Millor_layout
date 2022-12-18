import React from 'react';
import Subscription from './../components/Subscription/Subscription';
import BlogHeader from './../components/Page_Blog/BlogHeader/BlogHeader';
import BlogRange from './../components/Page_Blog/BlogRange/BlogRange';
import BlogTraining from '../components/Page_Blog/BlogTraining/BlogTraining';
// import { useParams } from 'react-router-dom';
import BlogNews from './../components/Page_Blog/BlogNews/BlogNews';
import BlogQuestions from '../components/Page_Blog/BlogQuestions/BlogQuestions';



export default function Blog() {
  // const { id } = useParams();

  // console.log(id);

  return (
    <article className="blog">
      <BlogHeader />
      <BlogRange />
      <BlogTraining />
      <BlogNews />
      <BlogQuestions/>
      <Subscription />
    </article>
  );
}



