import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AlbumHeaderDetails from './AlbumHeaderDetails';
import TopsideBar from './TopsideBar';
import ColorExtracted from './ColorExtracted';

class AlbumHeader extends Component {
  state= { colors: [] };

  componentDidUpdate() {
    const { colors } = this.state;
    const { gradientColorHandler } = this.props;
    gradientColorHandler(colors); // apenas para jogar a cor gradiente para fora
  }

  getColors = (colors) => {
    const SIX = 6;
    if (colors.length === SIX) {
      return this
        .setState({ colors: [] }, () => this
          .setState((state) => ({ colors: [...state.colors, ...colors] })));
    }
    this.setState((state) => ({ colors: [...state.colors, ...colors] }));
  }

  render() {
    const {
      responseMusics:
      { albumCollection:
        { artistName, collectionName, artworkUrl100 },
      },
      gradientColorHandler,
    } = this.props;

    const { colors } = this.state;
    // gradientColorHandler(colors);

    return (
      <section
        className="albumHeader gradHeader"
        data-testid="page-album"
        style={ {
          backgroundColor: colors.length !== 0
            && `rgb(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]}, 0.4)`,
        } }
      >
        <TopsideBar />
        <h1 className="titlePage" hidden>Album page</h1>
        <div className="contentAlbum">
          <div className="albumTitle">

            <div className="albumImage">
              <ColorExtracted
                getColors={ this.getColors }
                artistName={ artistName }
                artworkUrl100={ artworkUrl100 }
              />
            </div>

            <div className="albumDetails">
              <h6 className="albumTitleFixed">ALBUM</h6>
              <h1
                className="albumName albumTitleFixed ellipsis"
                data-testid="album-name"
                hidden
              >
                {`Collection Name ${collectionName}`}
              </h1>

              <h2
                className="albumName albumTitleFixed"
              >
                {collectionName}
              </h2>
              <AlbumHeaderDetails { ...this.props } />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

AlbumHeader.propTypes = {
  album: PropTypes.oneOfType([
    PropTypes.array,
  ]),
}.isRequired;

const mapStateToProps = (state) => ({
  responseMusics: state.responseMusics,
});

export default connect(mapStateToProps)(AlbumHeader);
