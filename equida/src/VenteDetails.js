
import React, { useEffect, useState } from 'react';

const VenteDetails = ({ venteId }) => {
  const [vente, setVente] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1/Equida-Spa2/public/api/vente/consulter/${venteId}`) // Mettez à jour l'URL en fonction de votre configuration
      .then(response => response.json())
      .then(data => setVente(data))
      .catch(error => console.log(error));
  }, [venteId]);

  if (!vente) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <div>
      <h2>Détails de la vente</h2>
      <p>Nom : {vente.nom}</p>
      <p>Date début : {formatDate(vente.dateDebut)}</p>
      <p>Date fin : {formatDate(vente.dateFin)}</p>
      <p>Catégorie de Vente : {vente.categorieDeVentes}</p>
    </div>
  );
};

const formatDate = date => {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const formattedDate = new Date(date).toLocaleDateString(undefined, options);
  return formattedDate;
};

export default VenteDetails;
