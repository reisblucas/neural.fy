import React, { Component } from 'react';
import '../styles/loadingLogin.css';

export default class LoadingLogin extends Component {
  render() {
    return (
      <div className="blocksLogin">
        <div className="titleModalLogin">
          <h1>Carregando...</h1>
        </div>
        {/*
          Spinner art by Melissa Em in October 7, 2019
          https://freefrontend.com/css-spinners/
          Made with
          HTML / CSS
          https://codepen.io/meowwwls/pen/OJJPbGb
        */}
        <div className="blockLogin greenLogin" />
        <div className="blockLogin whiteLogin" />
      </div>
    );
  }
}
