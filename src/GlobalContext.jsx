import { createContext, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  // STATE VARIABLES
  const [value, setValue] = useState(1)
  const [listOfItems, setListOfItems] = useState()

  // expose variables and methods we need to use outside
  return <GlobalContext.Provider
    value={{
      value,
      setValue,
      listOfItems,
      setListOfItems
    }}>
    {children}
  </GlobalContext.Provider>
};

export { GlobalProvider, GlobalContext }
