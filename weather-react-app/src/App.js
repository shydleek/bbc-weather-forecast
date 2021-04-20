import './App.css';
import React from 'react';
import WeeklyForecast from './components/WeeklyForecasts.js';
import Places from './components/Places.js';
import MapWeatherForecasts from './components/MapWeatherForecasts.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,  
  useLocation
} from "react-router-dom";

function App() {
  return (

<Router>
    <div>
        <nav>
          <ul className='list'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/places">Places</Link>
            </li>
            <li>
              <Link to="/weeklyforecasts">Weekly forecasts</Link>
            </li>
            <li>
              <Link to="/mapweatherforecasts">Map weather of forecasts</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className="App">
         
        <section> 
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/places">
              <Places />
            </Route>
            
            <Route path="/weeklyforecasts">
              <WeeklyForecast/>
            </Route>
            
            <Route path="/mapweatherforecasts">
              <MapWeatherForecasts/>
            </Route>

            <Route path="/">
              <h1>Home</h1>
              Welcome to our service. Please explore <Link to="/places">places to visit</Link> and <Link to="/weeklyforecasts">weather forecast</Link> for the following week
              Or you can learn information <Link to="/about">about us</Link>!
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>
            
          </Switch>
          

        </section>
      </div>
    </div>
    </Router>
  );
}
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>
        About us
      </h2>
      <p>Here is the description of the service and necessary terms.</p>
    </div>
  );
}
 
export default App;