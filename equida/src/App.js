import React, { useState } from 'react';
import SalesList from './SalesList';

const App = () => {
  const [showSalesList, setShowSalesList] = useState(false);

  const handleSalesListClick = () => {
    setShowSalesList(true);
  };

  return (
    <div>
      <h1>Mon application de ventes</h1>
      {!showSalesList && <p onClick={handleSalesListClick}>SalesList</p>}
      {showSalesList && <SalesList />}
    </div>
  );
};

export default App;
