
import React from "react";
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import EpisodeList from './EpisodeList';



function Index() {
  return <h2>Home</h2>;
}

function Characters() {
  return <h2>Characters</h2>;
}

function Locations() {
  return <h2>Locations</h2>;
}

function Episodes() {
  return <h2>Episodes</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/characters/">Characters</NavLink>
            </li>
            <li>
              <NavLink to="/locations/">Locations</NavLink>
            </li>
            <li>
              <NavLink to="/episodes/">Episodes</NavLink>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={WelcomePage} />
        <Route path="/characters/" component={CharacterList} />
        <Route path="/locations/" component={LocationsList} />
        <Route path="/episodes/" component={EpisodeList} />
      </div>



      
    </Router>
  );
}

export default AppRouter;