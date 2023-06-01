import React, { useState, useEffect } from 'react';
import moment from 'moment';
const VenteDetails = ({ vente }) => {
  const [chevaux, setChevaux] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1/Equida-Spa2/public/api/cheval/consulter/${vente.id}`)
      .then(response => response.json())
      .then(data => setChevaux(data.lots))
      .catch(error => console.log(error));
  }, [vente.id]);
  const formatDate = date => {
    console.log(date);
    const formattedDate = moment(date.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
    return formattedDate;}

  return (
    <div>
      <h1>
        Vente : {vente.nom} du {formatDate(vente.dateDebut)} au {formatDate(vente.dateFin)}
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
          {chevaux.map(lot => (
            <tr key={lot.id}>
              <td>{lot.cheval.nom}</td>
              <td>{lot.cheval.race.libellle}</td>
              <td>{lot.miseAPrix}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default VenteDetails;
