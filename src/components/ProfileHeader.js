import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';

export default class ProfileHeader extends Component {
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

    return (
      <Link to="/profile" className="linkStyle linkToProfileTopsideBar">
        <div className="showUserBar">
          <img
            src={ image }
            alt="profile icon"
            className="image-icon"
          />
          <h4 data-testid="header-user-name" className="ellipsis">{ name }</h4>
        </div>
      </Link>
    );
  }
}
