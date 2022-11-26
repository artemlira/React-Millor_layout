import React, { createContext, useState } from 'react';


export const MillorContext = createContext();

const Context = (props) => {
  const [openSearch, setOpenSearch] = useState(false);


  const value = {
    openSearch, setOpenSearch,

  };

  return (
    <MillorContext.Provider value={value}>{props.children}</MillorContext.Provider>
  )
}
export default Context;