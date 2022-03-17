import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import '../styles/search.css';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import ContentResult from '../components/ContentResult';
import fetchAlbum from '../thunk/fetchAlbumInRedux';
import { inputSearchAct } from '../actions';
import TopsideBar from '../components/TopsideBar';
// import FriendsActivity from '../components/FriendsActivity';

class Search extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputSearch: '',
      isButtonDisabled: true,
      isLoading: false,
      searchedTest: '',
      searchedMain: '',
      searchResult: [],
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => {
      const { inputSearch } = this.state;
      const TWO = 2;

      if (inputSearch.length >= TWO) {
        this.setState({
          isButtonDisabled: false,
        });
      }
    });
  }

  handleClick = async () => {
    const { inputSearch } = this.state;
    const { inputSearchGlobal, searchAlbumGlobal } = this.props;

    this.setState({
      isLoading: true,
      isButtonDisabled: true,
      searchResult: [],
      searchedMain: `Resultados de ${inputSearch}`,
    });

    const artist = await searchAlbumsAPI(inputSearch);

    if (artist.length === 0) {
      inputSearchGlobal('Nenhum álbum foi encontrado.');
      return this.setState({
        inputSearch: '',
        isLoading: false,
        searchedTest: 'Nenhum álbum foi encontrado',
        searchedMain: `No results found for "${inputSearch}".`, // ponto para diferenciar do searchedTest
      });
    }

    this.setState((prevState) => ({
      inputSearch: '',
      searchResult: artist,
      isLoading: false,
      searchedTest: `Resultados de álbuns de: ${prevState.inputSearch}`,
      searchedMain: `Top results for ${prevState.inputSearch}`,
    }));
    inputSearchGlobal(inputSearch);
    searchAlbumGlobal(inputSearch);
  }

  render() {
    const {
      isLoading,
      inputSearch,
      isButtonDisabled,
    } = this.state;

    return (
      <div className="headerPattern">
        <Header { ...this.props } />
        {
          isLoading && <Loading />
        }
        <div data-testid="page-search" className="patternPages">
          <TopsideBar
            handleClick={ this.handleClick }
            handleChange={ this.handleChange }
            inputSearch={ inputSearch }
            isButtonDisabled={ isButtonDisabled }
          />

          <ContentResult { ...this.state } />
        </div>

        {/* FriendsActivity sidebar */}
        {/* <FriendsActivity /> */}

      </div>
    );
  }
}

Search.propTypes = {
  inputSearchGlobal: PropTypes.func,
  searchAlbumGlobal: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  inputSearchGlobal: (inputValue) => dispatch(inputSearchAct(inputValue)),
  searchAlbumGlobal: (inputValue) => dispatch(fetchAlbum(inputValue)),
});

export default connect(null, mapDispatchToProps)(withRouter(Search));
