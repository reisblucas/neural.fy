import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AlbumHeaderDetails from './AlbumHeaderDetails';
import TopsideBar from './TopsideBar';
import { ColorExtractor } from 'react-color-extractor';

class AlbumHeader extends Component {
    renderSwatches = () => {
      const { colors } = this.state
  
      return colors.map((color, id) => {
        return (
          <div
            key={id}
            style={{
              backgroundColor: color,
              width: 100,
              height: 100
            }}
          />
        )
      })
    }

  render() {
    const {
      responseMusics:
      { albumCollection:
        { artistName, collectionName, artworkUrl100 },
      },
      getColors,
      colors,
    } = this.props;

    if (colors.length !== 0) {
      console.log(colors[0][1], colors[0][1], colors[0][2]);
    }


    return (
      <section
        className="albumHeader gradHeader"
        data-testid="page-album"
        style={{
          backgroundColor: colors.length !== 0 && `rgb(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]}, 0.4)`,
        }}
      >
        <TopsideBar />
        <h1 className="titlePage" hidden>Album page</h1>
        <div className="contentAlbum">
          <div className="albumTitle">
            <div className="albumImage imageBackground">
              <ColorExtractor rgb getColors={ getColors }>
              <img
                src={ artworkUrl100.replace('100x100bb.jpg', '600x600bb.jpg') }
                alt={ `Album cover of ${artistName}` }
                />
              </ColorExtractor>

              {/* <div
                style={{
                  marginTop: 20,
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                {this.renderSwatches()}
              </div> */}
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
