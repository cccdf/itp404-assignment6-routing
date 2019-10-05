import React from 'react';
import fetchUser from "./FetchUser";

export default class AuthorDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          authors: []
        };
      }
    
    async componentDidMount() {
      console.log(this.props.match.params.author);
      let response = await fetchUser(this.props.match.params.author);
      let authors = response.data.children;
      this.setState({ authors: authors});
      console.log(this.state.authors);
      
    }

    render(){
      return(
        <div>
          {this.state.authors.map((author) => {
            return(
              <div>
                <a href={author.data.url}>Title:{author.data.title}</a>
                <p>Score:{author.data.score}</p>
                <p>Author:{author.data.author}</p>
              </div>

            );
            
          })}
        </div>
      );
    }
}