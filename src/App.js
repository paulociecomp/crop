import React, { Component } from 'react';
import logo from './03-thumb-0afe30de1443cff445b00a79866bd1ccaf1ce803c5e341945775823af12522a6.png';
import './App.css';
import Cropper from 'cropperjs'

class App extends Component {

  cropper = {}

  componentDidMount = () => {
    var image = document.getElementById('image');
    this.cropper = new Cropper(image, {
      movable: false,
      zoomable: false,
      rotatable: false,
      scalable: false,
      zoomOnTouch: false,
      background: false,
      guides: false,
      center: false,
      highlight: false,
      movable: false,
      zoomOnWheel: false,
      viewMode: 1
    })
  }

  handleClick = () => {
    console.log('clicou');
    var result = document.querySelector('#result')
    var image = new Image()
    image.src = this.cropper.getCroppedCanvas().toDataURL('image/jpeg')
    result.appendChild(image);
  }

  render() {
    return (
      <div className="App">
        <img id="image" src={logo} />

        <p>
        <button onClick={this.handleClick} type="button" id="replace">crop</button>
      </p>

      <div id="result"></div>
      </div>
    );
  }
}

export default App;
