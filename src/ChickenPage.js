import React from 'react';
import fetchAnimal from './RedditApi';
import { Switch, Route, NavLink } from 'react-router-dom';


export default class ChickenPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          animal: [],
          loading: true
        };
      }

    async componentDidMount() {
        let response = await fetchAnimal("chicken");
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
          
        </div>
      );
    }
}