import React from 'react';
import fetchUser from "./RedditApi";

export default class AuthorDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          author: {}
        };
      }
    
    async componentDidMount() {
        let response = await fetchUser("cats");
        let animal = response.data.children;
        this.setState({ animal: animal, loading: false });
    }
}