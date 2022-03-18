import React, { Component } from 'react';
import '../styles/notFound.css';

class NotFound extends Component {
  render() {
    const notFound = '404: Not found this page :(';

    return (
      <div>
        <div className="headerPattern" data-testid="page-not-found">
          <div className="notFoundCentered">
            <h1 className="titlePage">{notFound}</h1>
            <div className="easterEggDiv">
              <img
                src="https://preview.redd.it/8p9lu946wrb81.jpg?auto=webp&s=5038299dd1c159334be0c3bcc5e57af91a317b66"
                alt=""
                className="easterEggImage"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
