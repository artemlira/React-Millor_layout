// import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
// import Catalog from './components/Catalog';
import Blog from './components/Blog/Blog';
import Contacts from './components/Contacts/Contacts';
import Basket from './components/Basket/Basket';
import PersonalArea from './components/PersonalArea/PersonalArea';
// import HeaderHome from './components/HeaderHome';
// import Slider from './components/Slider';
import Home from './components/Home';
import CoffeeCatalog from './components/CoffeeCatalog/CoffeeCatalog';
// import Search from './components/Search';
import TeaCatalog from './components/TeaCatalog/TeaCatalog';
import Layout from './components/Layout';
import WendingProducts from './components/WendingProducts/WendingProducts';
import HealthyDiet from './components/HealthyDiet/HealthyDiet';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='coffee_catalog' element={<CoffeeCatalog />} />
          <Route path='tea_catalog' element={<TeaCatalog />} />
          <Route path='wending_products' element={<WendingProducts />} />
          <Route path='healthy_diet' element={<HealthyDiet />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='basket' element={<Basket />} />
          <Route path='personal_area' element={<PersonalArea />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
