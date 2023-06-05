import React, { useState, useEffect } from 'react';
import ChevalDetails from './ChevalDetails';

const ChevalList = () => {
  const [chevaux, setChevaux] = useState([]);
  const [selectedChevalId, setSelectedChevalId] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1/Equida-Spa2/public/api/cheval/lister') // Remplacez l'URL par l'URL de votre API
      .then(response => response.json())
      .then(data => setChevaux(data))
      .catch(error => console.log(error));
  }, []);

  const handleChevalClick = (chevalId) => {
    setSelectedChevalId(chevalId);
  };

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
            <tr key={cheval.chevalId} onClick={() => handleChevalClick(cheval.chevalId)}>
              <td>{cheval.nomCheval}</td>
              <td>{cheval.libelleraceDuCheval}</td>
              <td>{cheval.prixDeVenteCheval}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedChevalId && <ChevalDetails chevalId={selectedChevalId} />}
    </div>
  );
};

export default ChevalList;
