import PropTypes from 'prop-types';
import React from 'react';
import Input from '../Input';

function LoginButton({ isSubmitBttIsDisabled, loginUser }) {
  return isSubmitBttIsDisabled
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
        onClick={ (e) => loginUser(e) }
      />
    );
}

LoginButton.propTypes = {
  isSubmitBttIsDisabled: PropTypes.bool,
  loginUser: PropTypes.func,
}.required;

export default LoginButton;
