import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enableRenderAlbumAct } from '../actions';
import '../styles/contentResult.css';
import ContentMap from './ContentMap';

class ContentResult extends Component {
  render() {
    const {
      searchedMain,
      searchResult,
      searchAlbum: { inputSearch, results, render },
    } = this.props;

    return (
      <div className="contentSpace">

        <section className="sectionResult">
          <div className="contentSearched">
            {
              (inputSearch.length !== 0 && !inputSearch.includes('No results'))
                ? (
                  <h3>
                    Top results for
                    {' '}
                    {inputSearch}
                  </h3>
                )
                : (
                  <h3>{searchedMain}</h3>
                )
            }
          </div>

          {
            render
              ? <ContentMap { ...this.props } contentToMap={ results } />
              : <ContentMap { ...this.props } contentToMap={ searchResult } />
          }

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

const mapStateToProps = (state) => ({
  searchAlbum: state.searchAlbum,
});

const mapDispatchToProps = (dispatch) => ({
  enableRender: (bool) => dispatch(enableRenderAlbumAct(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentResult);
