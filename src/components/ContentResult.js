import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enableRenderAlbumAct } from '../actions';
import '../styles/contentResult.css';
import ContentMap from './ContentMap';

class ContentResult extends Component {
  state = {
    isEnabledToRenderLinkContent: false,
  }

  async componentDidMount() {
    const { enableRender, searchAlbum: { render } } = this.props;

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
      searchAlbum: { results },
    } = this.props;

    const { isEnabledToRenderLinkContent } = this.state;

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
