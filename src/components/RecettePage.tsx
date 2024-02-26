import React from 'react';
import { useParams } from 'react-router-dom';
import recettesData from '../data/recettes.json';

type RecetteParams = {
  id: string;
};

const RecettePage: React.FC = () => {
  const { id } = useParams<RecetteParams>();
  const recette = recettesData.find(recette => recette.id.toString() === id);

  if (!recette) {
    return <div>Recette non trouvée</div>;
  }


  return (
    <div className="recette-detail" style={{
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
  );
};

export default RecettePage;
