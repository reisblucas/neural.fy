import React, { Component } from 'react';
import Header from '../components/Header';

class NotFound extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="patternPages" data-testid="page-not-found">
          <h1 className="titlePage">NotFound 404 page</h1>
        </div>
      </div>
    );
  }
}

export default NotFound;
