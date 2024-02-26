import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recettesData from '../data/recettes.json';

type Recette = {
  id: number;
  titre: string;
  ingredients: string[];
  tempsCuisson: string;
  imageUrl: string;
};

const ListeDeRecettes: React.FC = () => {
  const [recettes, setRecettes] = useState<Recette[]>([]);

  useEffect(() => {
    setRecettes(recettesData);
  }, []);

  return (
    <div className="recettes-container">
      {recettes.map((recette) => (
        <div
          className="recette-card"
          key={recette.id}
          style={{
            backgroundImage: `url(${require(`../data/${recette.imageUrl}`)})`,
          }}
        >
          <h2>
            <Link to={`/recette/${recette.id}`}>{recette.titre}</Link>
          </h2>
          <ul>
            {recette.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>Temps de cuisson : {recette.tempsCuisson}</p>
        </div>
      ))}
    </div>
  );
};

export default ListeDeRecettes;
