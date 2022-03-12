import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import '../styles/search.css';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import ContentResult from '../components/ContentResult';
import Input from '../components/Input';
import FriendsActivity from '../components/FriendsActivity';

class Search extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

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

  async handleClick() {
    const { inputSearch } = this.state;

    this.setState({
      isLoading: true,
      isButtonDisabled: true,
      searchResult: [],
      searchedMain: `Resultados de ${inputSearch}`,
    });

    const artist = await searchAlbumsAPI(inputSearch);

    if (artist.length === 0) {
      return this.setState({
        inputSearch: '',
        isLoading: false,
        searchedTest: 'Nenhum álbum foi encontrado',
        searchedMain: 'Nenhum álbum foi encontrado.', // ponto para diferenciar do searchedTest
      });
    }
    this.setState((prevState) => ({
      inputSearch: '',
      searchResult: artist,
      isLoading: false,
      searchedTest: `Resultados de álbuns de: ${prevState.inputSearch}`,
      searchedMain: `Resultados de ${prevState.inputSearch}`,
    }));
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
          <div className="search-hero">
            <form action="">
              <Input
                type="text"
                id="buttonSearch"
                name="inputSearch"
                placeholder="Artists, songs or podcasts..."
                className="inputSearch"
                data-testid="search-artist-input"
                value={ inputSearch }
                onChange={ this.handleChange }
              />
              <button
                className="buttonSearch"
                type="submit"
                data-testid="search-artist-button"
                disabled={ isButtonDisabled }
                onClick={ this.handleClick }
              >
                Pesquisar
              </button>
            </form>
          </div>

          <ContentResult { ...this.state } />
        </div>

        {/* FriendsActivity sidebar */}
        {/* <FriendsActivity /> */}

      </div>
    );
  }
}

export default Search;
