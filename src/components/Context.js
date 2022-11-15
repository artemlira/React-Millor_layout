import React, { createContext } from 'react';


export const MillorContext = createContext();

const Context = (props) => {


  const value = {

  };

  return (
    <MillorContext.Provider value={value}>{props.children}</MillorContext.Provider>
  )
}
export default Context;