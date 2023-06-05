import React, { useState, useEffect } from 'react';

const ChevalDetails = ({ chevalId }) => {
  const [cheval, setCheval] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1/Equida-Spa2/public/api/cheval/consulter/${chevalId}`) // Remplacez l'URL par l'URL de votre API
      .then(response => response.json())
      .then(data => setCheval(data[0]))
      .catch(error => console.log(error));
  }, [chevalId]);

  if (!cheval) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Détails du cheval</h2>
      <p>ID : {cheval.chevalId}</p>
      <p>Nom : {cheval.chevalNom}</p>
      <p>Race : {cheval.chevalRaceLibelle}</p>
      <p>Prix de départ : {cheval.chevalPrixDeDepart}</p>
      <p>Sexe : {cheval.chevalSexe}</p>
      <p>Sire : {cheval.chevalSire}</p>
      <img src={cheval.chevalImage}/>
    </div>
  );
};

export default ChevalDetails;
