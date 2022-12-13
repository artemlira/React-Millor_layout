import React, { createContext, useState, useRef, useEffect } from 'react';
import useScrollToSection from './../hooks/useScrollToSection';
import { useLocation } from 'react-router-dom';
import { allProducts } from './TextsDB';
import DiscountItem from './Page_Home/DiscountItem/DiscountItem';




export const MillorContext = createContext();

const Context = (props) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [scrollTo, scrollToHandler] = useScrollToSection();
  const location = useLocation();
  const [products, setProducts] = useState([]);  //продукты, которые попадают в корзину, при клике на кнопку "В корзину"
  const [productInBasket, setProductInBasket] = useState(false);
  const [totalAmountBasket, setTotalAmountBasket] = useState();
  const [discount, setDiscount] = useState([]);
  const [openRegistrationForm, setOpenRegistrationForm] = useState(null);
  const [openNav, setOpenNav] = useState(false);
  // const [amountBasketProducts, setAmountBasketProducts] = useState(1);


  const pic = useRef();
  const title = useRef();
  const text = useRef();
  const price = useRef();
  const pack = useRef();

  //получение отдельно продуктов из БД
  // const coffee = allProducts.filter(item => item.product === 'coffee');
  const [coffee, setCoffee] = useState(allProducts.filter(item => item.product === 'coffee'));
  // const tea = allProducts.filter(item => item.product === 'tea');
  // const coffee = allProducts.filter(item => item.product === 'coffee');
  // const coffee = allProducts.filter(item => item.product === 'coffee');



  //склонение слов, в зависимости от числа
  const transformationWord = (number, words) => {
    if (words) {
      let cases = [2, 0, 1, 1, 1, 2];
      return `${number} ${words[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]}`;
    }
  }

  //добавление продукции в корзину
  function addProduct(e, item) {
    setProducts([...products, {
      id: products.length + 1,
      img: item.image,
      title: item.title,
      text: item.description[0],
      price: item.price,
      pack: pack.current.value,
      amount: 1
    }]);
  }

  //удаление продукции из корзины
  function removeProduct(item) {
    let elem = products.indexOf(item);
    const copy = JSON.parse(JSON.stringify(products));
    if (elem !== -1) {
      copy.splice(elem, 1);
      setProducts(copy);
    }
  }

  //запись и извлечение данных из LocalStorage
  useEffect(() => {
    if (products.length) {
      localStorage.setItem('products', JSON.stringify(products));
    }

  }, [products]);

  useEffect(() => {
    const dataLocalStorage = JSON.parse(localStorage.getItem('products'));
    dataLocalStorage && setProducts(dataLocalStorage);
  }, []);

  //функция фильтрации и записи в массив только уникальных значений
  function fragmentationUniqueValues(arr, str) {
    const copyArr = arr
      .map(item => item[str])
      .join(',')
      .split(',');
    return [...new Set(copyArr)];
  }

  //Создаем массив компонентов с карточками товаров на странице CoffeeCatalog, в зависимости от кол-ва товара
  const discountItemCoffee = coffee.map(item =>
    <DiscountItem
      special={item.special}
      productTitle={item.title}
      description={item.description}
      image={item.image}
      productPrice={item.price}
      item={item}
      sale={item.sale} />);


  //===================
  const [active, setActive] = useState(false);
  const [filterText, setFilterText] = useState(null);
  const element = useRef();


  //функция фильтрация кофе по способу приготовления, на нажатие соответствующей кнопки
  function filter(elem) {
    setActive(!active);
    if (active) {
      setCoffee(allProducts.filter(item => item.product === 'coffee'));
      setFilterText(null);
    } else {
      setCoffee(coffee.filter(item => item.cookingMethod === elem.text));
      setFilterText(elem.text)
    }
  }





  const value = {
    openSearch, setOpenSearch,
    scrollTo, scrollToHandler,
    location,
    transformationWord,
    products, setProducts,
    productInBasket, setProductInBasket,
    pic, title, text, price, pack,
    addProduct, removeProduct,
    coffee, setCoffee,
    fragmentationUniqueValues,
    filter,
    active, setActive,
    discountItemCoffee,
    // addUniqueValues,
    element, filterText,
    // amountBasketProducts, setAmountBasketProducts,
    totalAmountBasket, setTotalAmountBasket,
    discount, setDiscount,
    openRegistrationForm, setOpenRegistrationForm,
    openNav, setOpenNav,
  };

  return (
    <MillorContext.Provider value={value}>{props.children}</MillorContext.Provider>
  )
}
export default Context;