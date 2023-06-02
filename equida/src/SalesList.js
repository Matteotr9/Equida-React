import React, { useState, useEffect } from 'react';
import moment from 'moment';
import VenteDetails from './VenteDetails';

const SalesList = () => {
  const [ventes, setVentes] = useState([]);
  const [selectedVente, setSelectedVente] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1/Equida-Spa2/public/api/vente/lister')
      .then(response => response.json())
      .then(data => setVentes(data))
      .catch(error => console.log(error));
  }, []);

  const handleVenteClick = venteId => {
    const selectedVente = ventes.find(vente => vente.idVente === venteId);
    setSelectedVente(selectedVente);
  };

  const formatDate = date => {
    console.log(date);
    const formattedDate = moment(date.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
    return formattedDate;
  };

  return (
    <div>
      <h1>Liste des ventes</h1>

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Date début</th>
            <th>Date fin</th>
            <th>Catégorie de Vente</th>
          </tr>
        </thead>
        <tbody>
          {ventes.map(vente => (
            <tr key={vente.idVente} onClick={() => handleVenteClick(vente.idVente)}>
              <td>{vente.nomVente}</td>
              <td>{formatDate(vente.dateDebutVente)}</td>
              <td>{formatDate(vente.dateFinVente)}</td>
              <td>{vente.libelleCategorieDeVente}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedVente && <VenteDetails vente={selectedVente}
      nom={selectedVente.nomVente}
      dateDebut={selectedVente.dateDebutVente}
      dateFin={selectedVente.dateFinVente}

      />}
    </div>
  );
};

export default SalesList;
