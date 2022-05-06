import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';
import fetchAlbumInRedux from '../thunk/fetchAlbumInRedux';
import { inputSearchAct } from '../actions';

class InputSearch extends Component {
  activateBlur = (e) => {
    e.preventDefault();

    const { key, keyCode } = e;
    const THIRTHEEN = 13;
    const enter = (keyCode === THIRTHEEN || key === 'Enter');

    if (enter) {
      const body = document.querySelector('body');
      body.style.setProperty('zoom', '100%'); // fix input after trigger input

      e.target.blur();
      e.target.value = '';
      return e.target.value;
    }
    return e.target.value;
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
              <RiSearchLine className="glassInputSearch" />
              <input
                type="text"
                id="buttonSearch"
                name="inputSearch"
                placeholder="Artists, songs or podcasts..."
                className="inputSearch"
                data-testid="search-artist-input"
                value={ inputSearch }
                onChange={ handleChange }
                // onBlur={ (e) => this.activateBlur(e) }
                onKeyUp={ (e) => this.activateBlur(e) }
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
  searchAlbumGlobal: (inputValue) => dispatch(fetchAlbumInRedux(inputValue)),
});

export default connect(null, mapDispatchToProps)(withRouter(InputSearch));
