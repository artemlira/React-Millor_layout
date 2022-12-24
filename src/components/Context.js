import React, { createContext, useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { allProducts } from './TextsDB';
import DiscountItem from './Page_Home/DiscountItem/DiscountItem';
import TeaItem from './Page_TeaCatalog/TeaItem/TeaItem';
import WendingProductsItem from './Page_WendingProducts/WendingProductsItem/WendingProductsItem';
import HealthyDietItem from './Page_HealthyDiet/HealthyDietItem/HealthyDietItem';




export const MillorContext = createContext();

const Context = (props) => {
  const [openSearch, setOpenSearch] = useState(false);  //открывает окно поиска в хедере на комп. версии
  const location = useLocation();
  const [products, setProducts] = useState([]);  //продукты, которые попадают в корзину, при клике на кнопку "В корзину"
  const [openRegistrationForm, setOpenRegistrationForm] = useState(null); //открытие регастрационной формы
  const [openNav, setOpenNav] = useState(false);//открытие меню в планшетном режиме

  const pack = useRef();
  let totalProducts = 0;
  products.forEach(item => totalProducts = totalProducts + item.amount);


  //получение отдельно продуктов из БД
  const [coffee, setCoffee] = useState(allProducts.filter(item => item.product === 'coffee'));
  const [tea, setTea] = useState(allProducts.filter(item => item.product === 'tea'));
  const [wending, setWending] = useState(allProducts.filter(item => item.product === 'wending product'));
  const [healthyDiet, setHealthyDiet] = useState(allProducts.filter(item => item.product === 'healthy diet'));

  //при первой загрузке браузера помещаем в карточку товара кофе первый попавшиеся товар из массива
  const [openOneProduct, setOpenOneProduct] = useState(coffee[0]);


  //склонение слов, в зависимости от числа
  const transformationWord = (number, words) => {
    if (words) {
      let cases = [2, 0, 1, 1, 1, 2];
      return `${number} ${words[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]}`;
    }
  }

  //добавление продукции в корзину
  function addProduct(e, item) {
    console.log(item);
    setProducts([...products, {
      id: products.length + 1,
      img: item.image,
      title: item.title,
      text: item.description[0],
      price: item.price,
      pack: pack.current.value,
      amount: item.amount,
      discount: item.discount,
      summ: ((+item.price * item.amount) - (+item.price * item.discount))
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

  //Создаем массив компонентов с карточками товаров на странице TeaCatalog, в зависимости от кол-ва товара
  const itemsTea = tea.map(item =>
    <TeaItem
      productTitle={item.title}
      description={item.description}
      image={item.image}
      productPrice={item.price}
      item={item}
      sale={item.sale}
      rating={item.rating}
    />)

  //Создаем массив компонентов с карточками товаров на странице WendingProducts, в зависимости от кол-ва товара
  const itemsWendingProducts = wending.map(item =>
    <WendingProductsItem
      productTitle={item.title}
      description={item.description}
      image={item.image}
      productPrice={item.price}
      item={item}
      sale={item.sale}
      rating={item.rating}
    />);

  //Создаем массив компонентов с карточками товаров на странице HealthyDiet, в зависимости от кол-ва товара
  const itemsHealthyDiet = healthyDiet.map(item =>
    <HealthyDietItem
      productTitle={item.title}
      description={item.description}
      image={item.image}
      productPrice={item.price}
      item={item}
      sale={item.sale}
      rating={item.rating}
    />)

  //===================
  const [active, setActive] = useState(false);
  const [filterText, setFilterText] = useState(null);
  const element = useRef();


  //функция фильтрации кофе по способу приготовления, на нажатие соответствующей кнопки
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

  //функция фильтрации чая по видам, на нажатие соответствующей кнопки
  function filterTea(elem) {
    setActive(!active);
    if (active) {
      setTea(allProducts.filter(item => item.product === 'tea'));
      setFilterText(null);
    } else {
      setTea(tea.filter(item => item.name === elem.text));
      setFilterText(elem.text)
    }
  }

  //функция фильтрации wending по видам, на нажатие соответствующей кнопки
  function filterWending(elem) {
    setActive(!active);
    if (active) {
      setWending(allProducts.filter(item => item.product === 'wending product'));
      setFilterText(null);
    } else {
      setWending(wending.filter(item => item.name === elem.text));
      setFilterText(elem.text)
    }
  }

  //функция фильтрации healthyDiet по видам, на нажатие соответствующей кнопки
  function filterHealthyDiet(elem) {
    setActive(!active);
    if (active) {
      setHealthyDiet(allProducts.filter(item => item.product === 'healthy diet'));
      setFilterText(null);
    } else {
      setHealthyDiet(healthyDiet.filter(item => item.name === elem.text));
      setFilterText(elem.text)
    }
  }

  //функции добавления и уменьшения кол-ва товаров в корзине
  function addCount(item) {
    setProducts(products.map(i => {
      if (item.id === i.id) {
        return { id: i.id, img: i.img, pack: i.pack, title: i.title, text: i.text, discount: i.discount, price: i.price, summ: i.summ, amount: +i.amount + 1 }
      } else {
        return i;
      }
    }));
  }

  // увеличение кол-ва продуктов, когда карзина еще пуста, можно делать на карточке одного товара
  function addOneCard() {
    setOpenOneProduct({ ...openOneProduct, amount: openOneProduct.amount + 1 });
  }

  function removeCount(item) {
    setProducts(products.map(i => {
      if (item.id === i.id && i.amount > 1) {
        return { id: i.id, img: i.img, pack: i.pack, title: i.title, text: i.text, discount: i.discount, price: i.price, summ: i.summ, amount: +i.amount - 1 }
      } else {
        return i;
      }
    }));
  }

  // уменьшение кол-ва продуктов, когда карзина еще пуста, можно делать на карточке одного товара
  function removeOneCard() {
    if (openOneProduct.amount > 1) {
      setOpenOneProduct({ ...openOneProduct, amount: openOneProduct.amount - 1 });
    }
  }

  const value = {
    openSearch, setOpenSearch,
    location,
    transformationWord,
    products, setProducts,
    totalProducts,
    pack,
    addProduct, removeProduct,
    coffee, setCoffee,
    tea, setTea,
    wending, setWending,
    healthyDiet, setHealthyDiet,
    fragmentationUniqueValues,
    filter, filterTea, filterHealthyDiet, filterWending,
    active, setActive,
    discountItemCoffee, itemsTea, itemsWendingProducts, itemsHealthyDiet,
    element, filterText,
    addCount, removeCount, addOneCard, removeOneCard,
    openRegistrationForm, setOpenRegistrationForm,
    openNav, setOpenNav,
    openOneProduct, setOpenOneProduct,
  };

  return (
    <MillorContext.Provider value={value}>{props.children}</MillorContext.Provider>
  )
}
export default Context;