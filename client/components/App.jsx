import React from 'react';
import PhotoList from './PhotoList';
import axios from 'axios';
import {API} from '../secrets';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: [],
      currentPhoto: {}
    }
    this.getPhoto = this.getPhoto.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
  }


  getPhoto() {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API}`)
    .then((photo) => {
      let newPhotoList = this.state.photos.slice();
      newPhotoList.push(photo.data)
      this.setState({
        photos: newPhotoList,
        currentPhoto: photo.data
      })
    })
    .catch((err) => console.log('Error getting photo', err))
  }

  componentDidMount() {
    this.getPhoto();
  }

  addPhoto() {
    console.log(this.state.currentPhoto)
    axios.post('http://127.0.0.1:3004/photos', this.state.currentPhoto)
    .then((reponse) =>  {
      console.log('post successful')
    })
    .catch((err) => {
      console.log('error posting', err)
    })
  }

  render() {
    return (
      <div>
        <PhotoList photos={this.state.photos} />
        {/* <button onClick={this.getPhoto}>Get Photo!</button> */}
        <button onClick={this.addPhoto}>Save Photo!</button>
      </div>
    )
  }
}

export default App;