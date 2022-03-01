import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/contentResult.css';

export default class ContentResult extends Component {
  render() {
    const { searchedMain, searchResult, searchedTest } = this.props;

    return (
      <div className="contentSpace">

        <section className="sectionResult">
          <div className="contentSearched">
            <h3>{searchedMain}</h3>
            <p hidden>{ searchedTest }</p>
          </div>

          <section className="sectionCards">
            {
              searchResult.map((music) => {
                const {
                  artistName,
                  artworkUrl100,
                  collectionId,
                  collectionName,
                } = music;

                return (
                  <Link
                    className="linkStyle"
                    key={ collectionId }
                    to={ `/album/${collectionId}` }
                    data-testid={ `link-to-album-${collectionId}` }
                  >
                    <div className="cardMusic">
                      <div className="imageCard">
                        <img
                          className="imageInsideCard"
                          src={ artworkUrl100.replace('100x100bb.jpg', '600x600bb.jpg') }
                          alt={ `Artwork of music ${collectionName}` }
                        />
                      </div>
                      <div className="textCard">
                        <h5 className="ellipsis">{collectionName}</h5>
                        <p className="ellipsis">{artistName}</p>
                      </div>
                    </div>
                  </Link>
                );
              })
            }
          </section>

        </section>
      </div>
    );
  }
}

ContentResult.propTypes = {
  searchResult: PropTypes.oneOfType([
    PropTypes.array,
  ]),
  searchedMain: PropTypes.string,
  searchedTest: PropTypes.string,
}.isRequired;
