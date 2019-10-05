import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import CatsPage from './CatsPage';
import ChickenPage from './ChickenPage';
import CowsPage from "./CowsPage";
import DogsPage from "./DogsPage";
import PigsPage from "./PigsPage";
import PageNotFound from "./PageNotFound";
import './App.css';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      animal: [],
      loading: true
    };
  }  

  render(){
      return(
        <Router>
          <div>
            <h1>Assignment06</h1>
            <nav>
              <ul>
                <li>
                <NavLink to="/animals/cats">Cats</NavLink>
                </li>
                <li>
                <NavLink to="/animals/chicken">Chicken</NavLink>
                </li>
                <li>
                <NavLink to="/animals/cows">Cows</NavLink>
                </li>
                <li>
                <NavLink to="/animals/dogs">Dogs</NavLink>
                </li>
                <li>
                <NavLink to="/animals/pigs">Pigs</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/" exact={true} />
            <Route path="/animals/cats">
              <CatsPage/>
            </Route>
            <Route path="/animals/chicken">
              <ChickenPage/>
            </Route>
            <Route path="/animals/cows">
              <CowsPage/>
            </Route>
            <Route path="/animals/dogs">
              <DogsPage/>
            </Route>
            <Route path="/animals/pigs">
              <PigsPage/>
            </Route>
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      );
    }
}
