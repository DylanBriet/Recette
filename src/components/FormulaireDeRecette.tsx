import React, { useState } from 'react';

const FormulaireRecette: React.FC = () => {
    const [titre, setTitre] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [tempsCuisson, setTempsCuisson] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ titre, ingredients: ingredients.split(','), tempsCuisson });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} placeholder="Titre de la recette" />
            <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingrédients (séparés par une virgule)" />
            <input type="text" value={tempsCuisson} onChange={(e) => setTempsCuisson(e.target.value)} placeholder="Temps de cuisson" />
            <button type="submit">Ajouter la recette</button>
        </form>
    );
};

export default FormulaireRecette;
