import React from 'react';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: ''
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.photo.title}</h1>
        <img src={this.props.photo.url}></img>
        <p>{this.props.photo.explanation}</p>
      </div>

    )
  }
}

export default Photo;