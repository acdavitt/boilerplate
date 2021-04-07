// top-level App component
import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: null,
    };

    this.saveInfo = this.saveInfo.bind(this);
  }

  componentDidMount() {
    this.getPhoto();
  };

  
  saveInfo() {
    axios.post('http://localhost:3030/image', this.state.photo)
    .then((response) => {
      console.info('Stored data.'); // For dev purposes only
    })
    .catch(console.error);
  };

  getPhoto() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=0mVJIl5O4WONcXXyKuxnmbtz5aA1AzaKOhqeDPgL')
    .then((data) => {
      this.setState({
        photo: data.data,
      });
    })
    .catch(console.error);
  }

  render() {
    // pieces for the webpage
    return (
      this.state.photo ? 
        <div>
          <h1>{this.state.photo.title}</h1>
          <img src={this.state.photo.url} />
          <p>{this.state.photo.explanation}</p>
          <button type="submit" onClick={this.saveInfo}>Save Info</button>
        </div>
        :
        null
    );
  }
}






