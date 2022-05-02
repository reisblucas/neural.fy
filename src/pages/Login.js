import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Input from '../components/Input';
import '../styles/login.css';
import '../styles/loadingLogin.css';
import { createUser } from '../services/userAPI';
import SpotifyLogo from '../images/spotify-logo-login-color.svg';
import LoadingLogin from '../components/LoadingLogin';
import GithubButton from '../components/buttons/GithubButton';
import LinkedinButton from '../components/buttons/LinkedinButton';
import DocButton from '../components/buttons/DocButton';

class Login extends Component {
  constructor() {
    super();

    this.handleChanges = this.handleChanges.bind(this);
    this.handleEffects = this.handleEffects.bind(this);

    this.state = {
      inputLogin: '',
      inputPassword: '',
      isSubmitBttIsDisabled: true,
      isLoading: true,
      authorized: false,
      lengthLogin: 0,
      lengthPassword: 0,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  handleChanges({ target: { name, value } }) {
    if (name === 'inputPassword') {
      this.setState({

        lengthPassword: value.length,
        [name]: value,
      }, () => this.handleEffects());
    }

    if (name === 'inputLogin') {
      this.setState({

        lengthLogin: value.length,
        [name]: value,
      }, () => this.handleEffects());
    }
  }

  handleEffects() {
    const THREE = 3;
    const { lengthLogin, lengthPassword } = this.state;
    const newLoginVerification = lengthLogin >= THREE && lengthPassword >= THREE;

    this.setState({
      isSubmitBttIsDisabled: !newLoginVerification,
    });
  }

  render() {
    const {
      inputLogin,
      inputPassword,
      isSubmitBttIsDisabled,
      isLoading,
      authorized,
    } = this.state;

    const defaultImg = 'https://i.pinimg.com/474x/86/0d/cd/860dcdf5cd536bfd86d8fc86efdbdd18.jpg';
    const neuralLogo = '<n4/>';

    return (
      isLoading
        ? (
          <div>
            <LoadingLogin />
          </div>
        )
        : (
          <div>
            <div className="page-login" data-testid="page-login">
              <div className="login-logo-title">
                <img src={ SpotifyLogo } alt="Spotify Logo" />
                <h1 className="login-name">
                  <span className="span-ln">by</span>
                  {neuralLogo}
                </h1>
              </div>
              <br />
              <form action="" className="login-inputs">
                <Input
                  id="inputLogin"
                  className="inputLogin"
                  data-testid="login-name-input"
                  name="inputLogin"
                  onChange={ this.handleChanges }
                  placeholder="Insert your name..."
                  type="text"
                  value={ inputLogin }
                  autoComplete="off"
                />

                <Input
                  id="inputPassword"
                  className="inputLogin inputPassword"
                  name="inputPassword"
                  onChange={ this.handleChanges }
                  placeholder="Password..."
                  type="password"
                  value={ inputPassword }
                />

                {
                  isSubmitBttIsDisabled
                    ? (
                      <Input
                        id="loginSubmitButton"
                        className="loginSubmitButton loginSubmitButtonDisabled"
                        data-testid="login-submit-button"
                        disabled={ isSubmitBttIsDisabled }
                        name="loginSubmitButton"
                        type="submit"
                        value="Sign in"
                      />
                    )
                    : (
                      <Input
                        id="loginSubmitButton"
                        className="loginSubmitButton loginSubmitButtonEnabled"
                        data-testid="login-submit-button"
                        disabled={ isSubmitBttIsDisabled }
                        name="loginSubmitButton"
                        type="submit"
                        value="Sign in"
                        onClick={ async (e) => {
                          e.preventDefault();
                          this.setState({ isLoading: true });
                          await createUser({ name: inputLogin, image: defaultImg });
                          this.setState({ isLoading: false, authorized: true });
                        } }
                      />
                    )
                }

                {
                  authorized && <Redirect to="/search" />
                }
              </form>
            </div>

            <footer className="copyright-f">
              <div>
                <GithubButton />
                <LinkedinButton />
                <DocButton />
              </div>

              <p
                className="copyright-p"
              >
                &copy; 2022 Spotify AB Design and Code from neur4l.
              </p>
              <p className="copyright-p">All rights reserved.</p>
            </footer>
          </div>
        )
    );
  }
}

export default Login;

//
