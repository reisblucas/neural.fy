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
      searchedTest,
      searchAlbum: { results, render },
    } = this.props;

    return (
      <div className="contentSpace">

        <section className="sectionResult">
          <div className="contentSearched">
            <h3>{searchedMain}</h3>
            <p hidden>{ searchedTest }</p>
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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    searchAlbum: state.searchAlbum,
  }
};

const mapDispatchToProps = (dispatch) => ({
  enableRender: (bool) => dispatch(enableRenderAlbumAct(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentResult);
