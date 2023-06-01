import React, { useState, useEffect } from 'react';

const ChevalList = () => {
  const [chevaux, setChevaux] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1/Equida-Spa2/public/api/cheval/lister') // Remplacez l'URL par l'URL de votre API
      .then(response => response.json())
      .then(data => setChevaux(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Liste des chevaux</h1>

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Race</th>
            <th>Prix de vente</th>
          </tr>
        </thead>
        <tbody>
          {chevaux.map(cheval => (
            <tr key={cheval.id}>
              <td>{cheval.nomCheval}</td>
              <td>{cheval.libelleraceDuCheval}</td>
              <td>{cheval.prixDeVenteCheval}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChevalList;
