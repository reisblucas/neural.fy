import React, { Component } from 'react';
import Header from '../components/Header';

class NotFound extends Component {
  render() {
    return (
      <div>
        <div className="headerPattern patternPages" data-testid="page-not-found">
          <Header { ...this.props } />
          <h1 className="titlePage">NotFound 404 page</h1>
        </div>
      </div>
    );
  }
}

export default NotFound;
