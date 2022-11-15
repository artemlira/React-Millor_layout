import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Catalog from './components/Catalog';
import Blog from './components/Blog';
import Contacts from './components/Contacts';
import Basket from './components/Basket';
import PersonalArea from './components/PersonalArea';
import HeaderHome from './components/HeaderHome';
import Slider from './components/Slider';


function App() {
  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <Routes>
        <Route path='catalog' element={<Catalog />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='basket' element={<Basket />} />
        <Route path='personal_area' element={<PersonalArea />} />
      </Routes>
    </>
  );
}

export default App;
