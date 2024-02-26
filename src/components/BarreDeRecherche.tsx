import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import recettesData from '../data/recettes.json';

interface BarreDeRechercheProps {
  toggleShowPot: (shouldShow: boolean) => void;
}

const BarreDeRecherche: React.FC<BarreDeRechercheProps> = ({ toggleShowPot }) => {
  const [recherche, setRecherche] = useState('');
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      setRecherche(''); 
    });

    return () => {
      unlisten();
    };
  }, [history]);

  const handleRecherche = (e: React.FormEvent) => {
    e.preventDefault();
    toggleShowPot(true);

    setTimeout(() => {
      const recetteTrouvee = recettesData.find(recette => 
        recette.titre.toLowerCase() === recherche.toLowerCase()
      );

      if (recetteTrouvee) {
        history.push(`/recette/${recetteTrouvee.id}`);
      }

      toggleShowPot(false); 
    }, 2000);
  };

  return (
    <form className="search-bar" onSubmit={handleRecherche}>
      <input
        list="recettes-list"
        type="search"
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
        placeholder="Rechercher une recette"
      />
      <datalist id="recettes-list">
        {recettesData.map((recette, index) => (
          <option key={index} value={recette.titre} />
        ))}
      </datalist>
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default BarreDeRecherche;
