import React, { createContext, useState } from 'react';
import useScrollToSection from './../hooks/useScrollToSection';
import { useLocation } from 'react-router-dom';




export const MillorContext = createContext();

const Context = (props) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [scrollTo, scrollToHandler] = useScrollToSection();
  const location = useLocation();


  const value = {
    openSearch, setOpenSearch,
    scrollTo, scrollToHandler,
    location,

  };

  return (
    <MillorContext.Provider value={value}>{props.children}</MillorContext.Provider>
  )
}
export default Context;