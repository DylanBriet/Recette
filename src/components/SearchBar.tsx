import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import recettesData from '../data/recettes.json';

interface SearchBarProps {
  toggleShowPot: (shouldShow: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ toggleShowPot }) => {
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

  const handleRecherche = async (e: React.FormEvent) => {
    e.preventDefault();
    toggleShowPot(true); 

    setTimeout(() => {
      const recettesTrouvees = recettesData.filter(recette =>
        recette.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(recherche.toLowerCase())
        )
      );
      
      history.push('/resultats', { recettesTrouvees });

      setTimeout(() => {
        toggleShowPot(false); 
      }, 6000);
    }, 0);
  };

  return (
    <form className="search-bar" onSubmit={handleRecherche}>
      <input
        list="ingredients-list"
        type="search"
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
        placeholder="Rechercher par ingrédient..."
      />
      <datalist id="ingredients-list">
        {recettesData.flatMap(recette => recette.ingredients).map((ingredient, index) => (
          <option key={index} value={ingredient} />
        ))}
      </datalist>
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default SearchBar;
