import Photo from './Photo'
import React from 'react'

function PhotoList(props) {

  return (
    <div>
      {props.photos.map((photo) => <Photo photo={photo}/>)}
    </div>
  )
}

export default PhotoList;