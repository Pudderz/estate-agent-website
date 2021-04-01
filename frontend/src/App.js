
import './App.css';
import PropertyPage from "./pages/PropertyPage.jsx";
import Home from "./pages/Home.jsx";
import Map from "./pages/Map.jsx";
import SearchPage from "./pages/SearchPage.jsx";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/map">Map Page</Link>
            </li>
            <li>
              <Link to="/property-search">Search Page</Link>
            </li>
            <li>
              <Link to="/property">Property Page</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/property-search">
            <SearchPage />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/property">
            <PropertyPage/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router> 
    </div>
  );
}

export default App;
