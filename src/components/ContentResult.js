import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { enableRenderAlbumAct } from '../actions';
import '../styles/contentResult.css';
import ContentMap from './ContentMap';

class ContentResult extends Component {
  state = {
    isEnabledToRenderLinkContent: false,
  }

  async componentDidMount() {
    const { enableRender, searchAlbum: { render } } = this.props;
    console.log('did montado', render);

    if (render) {
      await enableRender(false);
      this.setState({
        isEnabledToRenderLinkContent: true,
      });
    }
  }

  render() {
    const {
      searchedMain,
      searchResult,
      searchedTest,
      searchAlbum: { render, results },
    } = this.props;

    const { isEnabledToRenderLinkContent } = this.state;
    console.log('isRenderEnabled', render);

    return (
      <div className="contentSpace">

        <section className="sectionResult">
          <div className="contentSearched">
            <h3>{searchedMain}</h3>
            <p hidden>{ searchedTest }</p>
          </div>

          {
            isEnabledToRenderLinkContent
              ? <ContentMap { ...this.props } contentToMap={ results } />
              : <ContentMap { ...this.props } contentToMap={ searchResult } />
          }

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

const mapStateToProps = (state) => {
  console.log(state.searchAlbum);
  return {
    searchAlbum: state.searchAlbum,
  };
};

const mapDispatchToProps = (dispatch) => ({
  enableRender: (bool) => dispatch(enableRenderAlbumAct(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentResult);
