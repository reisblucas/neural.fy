import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import fetchAlbum from '../thunk/fetchAlbumInRedux';
import { inputSearchAct } from '../actions';

class InputSearch extends Component {
  render() {
    const { match: { path } } = this.props;

    const pathAlbum = '/album/:id';
    const pathFavorites = '/favorites';

    const { handleClick, handleChange, inputSearch,
      // isButtonDisabled,
    } = this.props;

    return (
      <div className="search-hero">
        <form action="">

          {
            (path !== pathAlbum && path !== pathFavorites)
          && (
            <div>
              <FontAwesomeIcon icon={ faMagnifyingGlass } className="glassInputSearch" />
              <Input
                type="text"
                id="buttonSearch"
                name="inputSearch"
                placeholder="Artists, songs or podcasts..."
                className="inputSearch"
                data-testid="search-artist-input"
                value={ inputSearch }
                onChange={ handleChange }
                onKeyPress={ (e) => {
                  if (e.key === 'Enter') {
                    handleClick(e);
                    console.log('teste');
                  }
                } }
              />
            </div>
          )
          }

          {/* <button
            className="buttonSearch"
            type="submit"
            data-testid="search-artist-button"
            disabled={ isButtonDisabled }
            onClick={ handleClick }
            hidden
          >
            Search
          </button> */}
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
