import React, { Component } from 'react';
import '../styles/loadingHeader.css';

class LoadingHeader extends Component {
  render() {
    return (
      <div className="blocksHeader">
        {/*
          Spinner art by Melissa Em in October 7, 2019
          https://freefrontend.com/css-spinners/
          Made with
          HTML / CSS
          https://codepen.io/meowwwls/pen/OJJPbGb
        */}
        <div className="blockHeader greenHeader" />
        <div className="blockHeader whiteHeader" />
      </div>
    );
  }
}

export default LoadingHeader;
