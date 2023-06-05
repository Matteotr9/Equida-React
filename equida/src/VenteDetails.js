import React, { useState, useEffect } from 'react';
import moment from 'moment';
import ChevalDetails from './ChevalDetails';

const VenteDetails = ({ vente,nom,dateDebut,dateFin }) => {
  const [lots, setLots] = useState([]);
  const [selectedChevalId, setSelectedChevalId] = useState(null);

  useEffect(() => {
    console.log(vente);
    fetch(`http://127.0.0.1/Equida-Spa2/public/api/vente/consulter/${vente.idVente}`)
      .then(response => response.json())
      .then(data => setLots(data))
      .catch(error => console.log(error));
  }, [vente.idVente]);

  const formatDate = date => {
    console.log(date);
    const formattedDate = moment(date.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
    return formattedDate;
  };
  
  return (
    <div>
      <h1>
        Vente : {nom} du {formatDate(dateDebut)} au {formatDate(dateFin)}
      </h1>

      <table>
        <thead>
          <tr>
            <th>Nom du Cheval</th>
            <th>Race</th>
            <th>Mise A prix</th>
          </tr>
        </thead>
        <tbody>
          {lots.map(lot => (
             <tr key={lot.lotChevalId} onClick={() => setSelectedChevalId(lot.lotChevalId)}>
              <td>{lot.lotChevalNom}</td>
              <td>{lot.lotChevalRaceLibelle}</td>
              <td>{lot.lotMiseAPrix}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedChevalId && <ChevalDetails chevalId={selectedChevalId} />}
    </div>
  );
};

export default VenteDetails;
