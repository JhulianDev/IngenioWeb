import { createContext, useState } from "react";

const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [currencySelected, setCurrencySelected] = useState("USD");

  const handleCurrency = (currency) => {
    setCurrencySelected(currency)
  }

  return (
    <CurrencyContext.Provider value={{ currencySelected, handleCurrency }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export { CurrencyContext, CurrencyProvider };