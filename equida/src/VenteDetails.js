
import React, { useState, useEffect } from 'react';

const VenteDetails = ({ venteId }) => {
  const [venteDetails, setVenteDetails] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1/Equida-Spa2/public/api/vente/consulter/${venteId}`)
      .then(response => response.json())
      .then(data => setVenteDetails(data))
      .catch(error => console.log(error));
  }, [venteId]);

  if (!venteDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Détails de la vente</h2>
      <p>Nom : {venteDetails.nom}</p>
      <p>Date début : {formatDate(venteDetails.dateDebut)}</p>
      <p>Date fin : {formatDate(venteDetails.dateFin)}</p>
      <p>Catégorie de Vente : {venteDetails.categorieDeVentes}</p>
    </div>
  );
};

const formatDate = date => {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const formattedDate = new Date(date).toLocaleDateString(undefined, options);
  return formattedDate;
};

export default VenteDetails;

