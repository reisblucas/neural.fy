import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser, updateUser } from '../services/userAPI';
import '../styles/profileEdit.css';

class ProfileEdit extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      userLoad: [],
      isButtonDisabled: true,
      redirect: false,
    };
  }

  componentDidMount() {
    this.fetchUser();
    this.buttonVerifier();
  }

  handleChange = ({ target: { name, value } }) => {
    const { userLoad, infoToUpdate } = this.state;

    let newUserInfo;
    const destructureUser = { ...userLoad };
    const destructureInfo = { ...infoToUpdate };

    if (infoToUpdate === undefined) {
      newUserInfo = destructureUser;
    } else {
      newUserInfo = destructureInfo;
    }

    newUserInfo[name] = value;

    this.setState({
      infoToUpdate: newUserInfo,
    }, this.buttonVerifier());
  }

  handleLoad() {
    this.setState((prevState) => ({
      isLoading: !prevState.isLoading,
    }));
  }

  fetchUser = async () => {
    const user = await getUser();

    this.setState({
      userLoad: user,
    });

    this.handleLoad();

    return user;
  }

  handleClick = (e) => {
    e.preventDefault();
    const { infoToUpdate } = this.state;

    this.setState({ isLoading: true });
    updateUser(infoToUpdate);
    this.setState({
      isLoading: false,
      redirect: true,
    });
  }

  buttonVerifier = () => {
    const { infoToUpdate: update } = this.state;
    const result = { ...update };

    // Se todos forem verdadeiro, botão habilita
    const boolButton = Object.values(result).every((item) => item);

    // neguei para não usar o prevstate e negar a condição passada, mais linhas para o mesmo
    this.setState({
      isButtonDisabled: !boolButton,
    });
  }

  render() {
    const { userLoad: { name, email, image, description },
      isLoading,
      isButtonDisabled,
      redirect,
    } = this.state;

    return (
      <div className="headerPattern">
        <Header { ...this.props } />

        {
          isLoading ? <Loading />
            : (
              <div className="patternPages" data-testid="page-profile-edit">
                <h2 className="titlePage">Edit Profile</h2>
                <section className="formContainer">

                  <form action="" className="formEdit">
                    <label htmlFor="inputName">
                      <div>Name:</div>
                      <input
                        type="text"
                        id="inputName"
                        name="name"
                        defaultValue={ name }
                        onChange={ this.handleChange }
                        data-testid="edit-input-name"
                        required
                      />
                    </label>

                    <label htmlFor="inputEmail">
                      <div>E-mail:</div>
                      <input
                        type="email"
                        id="inputEmail"
                        name="email"
                        defaultValue={ email }
                        onChange={ this.handleChange }
                        data-testid="edit-input-email"
                        required
                      />
                    </label>

                    <label htmlFor="inputImage">
                      <div>Image:</div>
                      <input
                        type="text"
                        name="image"
                        id="inputImage"
                        defaultValue={ image }
                        onChange={ this.handleChange }
                        data-testid="edit-input-image"
                      />
                    </label>

                    <label htmlFor="inputDescription">
                      <div>Description:</div>
                      <input
                        name="description"
                        id="inputDescription"
                        type="text"
                        maxLength="144"
                        onChange={ this.handleChange }
                        data-testid="edit-input-description"
                        defaultValue={ description }
                        required
                      />
                    </label>

                    <input
                      id="buttonSub"
                      className="buttonEditProfile"
                      type="submit"
                      value="Edit profile"
                      onClick={ (e) => this.handleClick(e) }
                      data-testid="edit-button-save"
                      disabled={ isButtonDisabled }
                    />

                    {
                      redirect && <Redirect to="/profile" />
                    }

                  </form>
                </section>
              </div>
            )
        }

      </div>
    );
  }
}

export default ProfileEdit;
