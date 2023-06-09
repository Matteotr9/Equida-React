import React, { useState } from 'react';
import SalesList from './SalesList';
import ChevauxList from './ChevalList';
import ChevalList from './ChevalList';

const App = () => {
  const [showSalesList, setShowSalesList] = useState(false);
  const [showChevauxList, setShowChevauxList] = useState(false);

  const handleSalesListClick = () => {
    setShowSalesList(true);
    setShowChevauxList(false);
  };

  const handleChevauxListClick = () => {
    setShowChevauxList(true);
    setShowSalesList(false);
  };

  return (
    
    <div>
      <h1>Equida</h1>
      {!showSalesList && <p onClick={handleSalesListClick}>Liste des Ventes</p>}
      {showSalesList && <SalesList />}
      {!showChevauxList && <p onClick={handleChevauxListClick}>Liste des Chevaux</p>}
      {showChevauxList && <ChevalList />}
    </div>
  );
};

export default App;

