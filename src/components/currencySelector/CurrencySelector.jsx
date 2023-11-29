import React, { useContext } from 'react';
import { BoxCurrency, Currency, Icon, MainContainer } from './CurrencySelectorStyles';
import BANDERA_ARGENTINA from '../../assets/img/Flag-Argentina.svg';
import BANDERA_EEUU from '../../assets/img/Flag-EEUU.svg';
import BANDERA_ESPAÑA from '../../assets/img/Flag-Espana.svg';
import { CurrencyContext } from '../../contexts/CurrencyContext';

const CurrencySelector = () => {
  const { currencySelected, handleCurrency } = useContext(CurrencyContext);
  return (
    <MainContainer>
      <BoxCurrency $selected={currencySelected === "ARS"} onClick={() => {handleCurrency("ARS")}}>
        <Icon src={BANDERA_ARGENTINA} alt='Bandera Argentina' />
        <Currency>$(ARS)</Currency>
      </BoxCurrency>

      <BoxCurrency $selected={currencySelected === "USD"} onClick={() => {handleCurrency("USD")}}>
        <Icon src={BANDERA_EEUU} alt='Bandera Estados Unidos' />
        <Currency>$(USD)</Currency>
      </BoxCurrency>

      <BoxCurrency $selected={currencySelected === "EUR"} onClick={() => {handleCurrency("EUR")}}>
        <Icon src={BANDERA_ESPAÑA} alt='Bandera España' />
        <Currency>$(EUR)</Currency>
      </BoxCurrency>
    </MainContainer>
  );
};

export default CurrencySelector;