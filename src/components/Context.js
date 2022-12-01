import React, { createContext, useState } from 'react';
import useScrollToSection from './../hooks/useScrollToSection';




export const MillorContext = createContext();

const Context = (props) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [scrollTo, scrollToHandler] = useScrollToSection();


  const value = {
    openSearch, setOpenSearch,
    scrollTo, scrollToHandler,

  };

  return (
    <MillorContext.Provider value={value}>{props.children}</MillorContext.Provider>
  )
}
export default Context;