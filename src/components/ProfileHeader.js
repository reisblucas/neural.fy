import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUser } from '../services/userAPI';

class ProfileHeader extends Component {
  state = {
    name: '',
    image: 'https://i.pinimg.com/474x/86/0d/cd/860dcdf5cd536bfd86d8fc86efdbdd18.jpg',
  };

  componentDidMount() {
    this.catchUser();
  }

  async catchUser() {
    const user = await getUser();

    this.setState(() => {
      if (user.image.length > 0) {
        return ({
          isLoading: false,
          name: user.name,
          image: user.image,
        });
      }
      return {
        isLoading: false,
        name: user.name,
      };
    });
  }

  render() {
    const { name, image } = this.state;
    const { location: { pathname } } = this.props;

    switch (true) {
    case pathname === '/favorites':
      return (
        <Link
          to="/profile"
          className="linkStyle linkToProfileTopsideBar reset-showuser"
        >
          <div className="showUserBar">
            <img
              src={ image }
              alt="profile icon"
              className="image-icon"
            />
            <p data-testid="header-user-name" className="ellipsis">{ name }</p>
          </div>
        </Link>
      );
    default:
      return (
        <Link
          to="/profile"
          className="linkStyle linkToProfileTopsideBar"
        >
          <div className="showUserBar">
            <img
              src={ image }
              alt="profile icon"
              className="image-icon"
            />
            <p data-testid="header-user-name" className="ellipsis">{ name }</p>
          </div>
        </Link>
      );
    }
  }
}

ProfileHeader.propTypes = {
  location: PropTypes.string,
}.isRequired;

export default withRouter(ProfileHeader);
