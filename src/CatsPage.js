import React from 'react';
import fetchAnimal from './RedditApi';
import AuthorDetails from './AuthorDetails';
import { Switch, Route, NavLink } from 'react-router-dom';


export default class CatsPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          animal: [],
          loading: true
        };
      }

    async componentDidMount() {
        let response = await fetchAnimal("cats");
        let animal = response.data.children;
        this.setState({ animal: animal, loading: false });
    }

    render(){
      return(
        <div>
          <div>
          {this.state.animal.map((animal) => {
            return(
              <div>
                <a href={animal.data.url} target="_blank">Title:{animal.data.title}</a>
                <p>Score:{animal.data.score}</p>
                <NavLink to={`/author/${animal.data.author}`} key={animal.id}>
                <p>Author:{animal.data.author}</p>
                </NavLink>
                
              </div>
            );
          })}
          </div>
          <div className="main">
          <Switch>
            <Route path="/author/:author" component={AuthorDetails} />
          </Switch>
        </div>
          
        </div>
      );
    }
}