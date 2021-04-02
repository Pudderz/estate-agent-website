import "./App.css";
import PropertyPage from "./pages/PropertyPage.jsx";
import Home from "./pages/Home.jsx";
import Map from "./pages/Map.jsx";
import SearchPage from "./pages/SearchPage.jsx";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { Footer } from "./components/Shared/Footer";

function App() {
  return (
    <div className="App min-h-screen">
      <Router>
        <div>
          <nav className="w-full bg-gray-700 py-2 sticky top-0">
            <ul className="flex flex-nowrap justify-between h-auto">
              <li className="pd-4  w-full h-full">
                <Link
                  className="font-bold px-4 py-1 rounded focus:outline-none focus:shadow-outline text-white mx-4 hover:text-gray-200"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="pd-4 bg-gray-700 w-full h-full">
                <Link
                  className="font-bold px-4 py-1 rounded focus:outline-none focus:shadow-outline text-white mx-4 hover:text-gray-200"
                  to="/map"
                >
                  Map Page
                </Link>
              </li>
              <li className="pd-4 bg-gray-700 w-full h-full">
                <Link
                  className="font-bold  rounded focus:outline-none focus:shadow-outline text-white mx-4 hover:text-gray-200"
                  to="/property-search"
                >
                  Search Page
                </Link>
              </li>
              <li className="pd-4 bg-gray-700 w-full h-full">
                <Link
                  className="font-bold px-4 py-1 rounded focus:outline-none focus:shadow-outline text-white mx-4 hover:text-gray-200"
                  to="/property"
                >
                  Property Page
                </Link>
              </li>
              <li className="pd-4 bg-gray-700 w-full h-full">
                <Link
                  className="font-bold px-4 py-1 rounded focus:outline-none focus:shadow-outline text-white mx-4 hover:text-gray-200"
                  to="/sign-in"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/property-search">
              <SearchPage />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/sign-in">
              <SignIn/>
            </Route>
            <Route path="/property">
              <PropertyPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer/> 
    </div>
  );
}

export default App;
