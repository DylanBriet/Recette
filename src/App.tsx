import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListeDeRecettes from './components/ListeDeRecettes';
import RecettePage from './components/RecettePage';
import BarreDeRecherche from './components/BarreDeRecherche';
import SearchBar from './components/SearchBar';
import ResultatsRecherche from './components/ResultatsRecherche';
import CookingPot from './components/CookingPot';
import './App.css';

const App: React.FC = () => {
  const [showPot, setShowPot] = useState(false);

  const toggleShowPot = (shouldShow: boolean) => {
    console.log(`toggleShowPot called with: ${shouldShow}`);
    setShowPot(shouldShow);
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Des recettes succulentes</Link>
        </nav>
        <BarreDeRecherche toggleShowPot={toggleShowPot} />
        <SearchBar toggleShowPot={toggleShowPot} />
        <CookingPot isVisible={showPot} />
        <Switch>
          <Route path="/recette/:id">
            <RecettePage />
          </Route>
          <Route path="/resultats">
            <ResultatsRecherche />
          </Route>
          <Route exact path="/">
            <ListeDeRecettes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
