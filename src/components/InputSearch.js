import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import fetchAlbum from '../thunk/fetchAlbumInRedux';
import { inputSearchAct } from '../actions';

class InputSearch extends Component {
  activateBlur = (e) => {
    e.preventDefault();

    const { key, keyCode } = e;
    const THIRTHEEN = 13;
    const enter = (keyCode === THIRTHEEN || key === 'Enter');
    if (enter) { e.target.blur(); }
  }

  render() {
    const { match: { path } } = this.props;

    const pathAlbum = '/album/:id';
    const pathFavorites = '/favorites';

    const { handleClick, handleChange, inputSearch,
      // isButtonDisabled,
    } = this.props;

    return (
      <div className="search-hero">
        <form action="" onSubmit={ (e) => handleClick(e) }>

          {
            (path !== pathAlbum && path !== pathFavorites)
          && (
            <label htmlFor="buttonSearch" className="labelInputSearch">
              <FontAwesomeIcon icon={ faMagnifyingGlass } className="glassInputSearch" />
              <input
                type="text"
                id="buttonSearch"
                name="inputSearch"
                placeholder="Artists, songs or podcasts..."
                className="inputSearch"
                data-testid="search-artist-input"
                value={ inputSearch }
                onChange={ handleChange }
                onBlur={ (e) => this.activateBlur(e) }
                onKeyDown={ (e) => this.activateBlur(e) }
                autoComplete="off"
              />
            </label>
          )
          }
        </form>
      </div>
    );
  }
}

InputSearch.propTypes = {
  inputSearchGlobal: PropTypes.func,
  searchAlbumGlobal: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  inputSearchGlobal: (inputValue) => dispatch(inputSearchAct(inputValue)),
  searchAlbumGlobal: (inputValue) => dispatch(fetchAlbum(inputValue)),
});

export default connect(null, mapDispatchToProps)(withRouter(InputSearch));
