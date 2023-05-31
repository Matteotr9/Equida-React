import React, { useState, useEffect } from 'react';
import ChevauxDetails from './ChevauxDetails';

const ChevauxList = () => {
  const [chevaux, setChevaux] = useState([]);
  const [selectedCheval, setSelectedCheval] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1/Equida-Spa2/public/api/cheval/lister')
      .then(response => response.json())
      .then(data => setChevaux(data))
      .catch(error => console.log(error));
  }, []);

  const handleChevalClick = chevalId => {
    const selectedCheval = chevaux.find(cheval => cheval.id === chevalId);
    setSelectedCheval(selectedCheval);
  };

  return (
    <div>
      <h1>Liste des chevaux</h1>

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Race</th>
            <th>Prix de Vente</th>
          </tr>
        </thead>
        <tbody>
          {chevaux.map(cheval => (
            <tr key={cheval.id} onClick={() => handleChevalClick(cheval.id)}>
              <td>{cheval.nom}</td>
              <td>{cheval.race.libellle}</td>
              <td>{cheval.prixDeVente}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedCheval && <ChevauxDetails cheval={selectedCheval} />}
    </div>
  );
};

export default ChevauxList;
