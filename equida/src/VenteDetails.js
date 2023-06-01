import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VenteDetails = ({ venteId }) => {
  const [lots, setLots] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1/Equida-Spa2/public/api/vente/consulter/${venteId}`)
      .then(response => {
        setLots(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [venteId]);

  return (
    <div>
      <h2>Détails de la vente</h2>
      {lots.length === 0 ? (
        <p>Aucun lot disponible</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nom du cheval</th>
              <th>Race du cheval</th>
              <th>Mise à prix</th>
            </tr>
          </thead>
          <tbody>
            {lots.map((lot, index) => (
              <tr key={index}>
                <td>{lot.lotChevalNom}</td>
                <td>{lot.lotChevalRaceLibelle}</td>
                <td>{lot.lotMiseAPrix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VenteDetails;
