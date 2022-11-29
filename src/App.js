import { Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import Basket from './pages/Basket';
import PersonalArea from './pages/PersonalArea';
import Home from './pages/Home';
import CoffeeCatalog from './pages/CoffeeCatalog';
import TeaCatalog from './pages/TeaCatalog';
import Layout from './components/Layout';
import WendingProducts from './pages/WendingProducts';
import HealthyDiet from './pages/HealthyDiet';
import CatalogPage from './pages/CatalogPage';



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='catalog' element={<CatalogPage />} />
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
