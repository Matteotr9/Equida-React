import React, { useState, useEffect } from 'react';

const SalesList = () => {
  const [ventes, setSales] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1/Equida-Spa2/public/api/vente/lister')
      .then(response => response.json())
      .then(data => setSales(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Liste des ventes</h1>
      <ul>
        {ventes.map(vente => (
          <li key={vente.id}>
            <p>Nom : {vente.datedebut}</p>
            <p>Date Debut : {vente.amount}</p>
            <p>Date Fin : {vente.customer}</p>
            <p>Catégorie de vente : {vente.customer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesList;
