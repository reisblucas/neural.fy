import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ContentMap extends Component {
  render() {
    const { contentToMap } = this.props;

    return (
      <section className="sectionCards">
        {
          contentToMap.map((music) => {
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
    );
  }
}

ContentMap.propTypes = {
  contentToMap: PropTypes.oneOfType([
    PropTypes.array,
  ]),
}.isRequired;
