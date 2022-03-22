import React, { Component } from 'react';
import '../styles/loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="spinner">
        {/*
          Spinner art by Melissa Em in October 7, 2019
          https://freefrontend.com/css-spinners/
          Made with
          HTML / CSS
          https://codepen.io/meowwwls/pen/OJJPbGb
        */}
        <div className="blocks">
          <div className="block green" />
          <div className="block white" />
        </div>
      </div>
    );
  }
}

export default Loading;
