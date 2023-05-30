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
            <p>Nom : {vente.nom}</p>
            <p>Date Debut : {vente.date_Debut}</p>
            <p>Date Fin : {vente.date_fin}</p>
            <p>Catégorie de vente : {vente.categorieDeVentes.libelle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesList;
