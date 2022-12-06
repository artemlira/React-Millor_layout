import React, { createContext, useState, useRef, createRef } from 'react';
import useScrollToSection from './../hooks/useScrollToSection';
import { useLocation } from 'react-router-dom';




export const MillorContext = createContext();

const Context = (props) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [scrollTo, scrollToHandler] = useScrollToSection();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [productInBasket, setProductInBasket] = useState(false);
  console.log(products);

  const pic = useRef();
  const title = createRef();
  const text = useRef();
  const price = useRef();
  const pack = useRef();



  const transformationWord = (number, words) => {
    if (words) {
      let cases = [2, 0, 1, 1, 1, 2];
      return `${number} ${words[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]}`;
    }
  }

  function addProduct(e) {
    setProducts([...products, {
      id: products.length + 1,
      img: pic.current.attributes.src.nodeValue,
      title: title.current.innerText,
      text: text.current.innerText,
      price: price.current.innerText,
      pack: pack.current.value,
    }]);
  }

  function removeProduct(item) {
    let elem = products.indexOf(item);
    const copy = JSON.parse(JSON.stringify(products));

    if (elem !== -1) {
      copy.splice(elem, 1);
      setProducts(copy);
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
  };

  return (
    <MillorContext.Provider value={value}>{props.children}</MillorContext.Provider>
  )
}
export default Context;