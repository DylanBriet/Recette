import React from 'react';
import { useLocation } from 'react-router-dom';

interface Recette {
  id: number;
  titre: string;
  ingredients: string[];
  tempsCuisson: string;
  imageUrl: string;
}

interface LocationState {
  recettesTrouvees: Recette[];
}

const ResultatsRecherche: React.FC = () => {
  const location = useLocation<LocationState>();
  const recettesTrouvees = location.state?.recettesTrouvees || [];

  return (
    <div>
      {recettesTrouvees.length > 0 ? (
        recettesTrouvees.map(recette => (
          <div key={recette.id} className="recette-detail" style={{
            backgroundImage: `url(${require(`../data/${recette.imageUrl}`)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div className="recette-content">
              <h2>{recette.titre}</h2>
              <ul>
                {recette.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <p>Temps de cuisson : {recette.tempsCuisson}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Aucune recette trouvée pour cet ingrédient.</p>
      )}
    </div>
  );
};

export default ResultatsRecherche;
