import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';
import '../styles/profile.css';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      userLoad: [],
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  componentWillUnmount() {
    this.setState = () => {};
  }

  handleLoad = (user) => {
    this.setState((prevState) => ({
      isLoading: !prevState.isLoading,
      userLoad: user,
    }));
  }

  fetchUser = async () => {
    const user = await getUser();
    this.handleLoad(user);
  }

  render() {
    const { userLoad: { name, email, image, description }, isLoading } = this.state;

    return (
      <div className="headerPattern">
        <Header { ...this.props } />

        {
          isLoading ? <Loading />
            : (
              <section data-testid="page-profile" className="pageProfile  patternPages">
                <h1 className="titlePage">Profile page</h1>

                <div className="divProfilePicture">

                  {
                    image.length > 1
                      ? (
                        <img
                          src={ image }
                          alt="Profile"
                          className="profilePicture"
                          data-testid="profile-image"
                        />
                      )
                      : (
                        <img
                          src="https://i.pinimg.com/474x/86/0d/cd/860dcdf5cd536bfd86d8fc86efdbdd18.jpg"
                          alt="Profile"
                          className="profilePicture"
                          data-testid="profile-image"
                        />
                      )
                  }
                </div>

                <div className="cardProfile">

                  <div className="cardDefault">
                    <ul>
                      <li>Name:</li>
                      <li>E-mail:</li>
                      <li>Description:</li>
                    </ul>
                  </div>

                  <div className="cardValue">
                    <ul>
                      <li>{name}</li>
                      <li>{email}</li>
                      <li>{description}</li>
                    </ul>
                  </div>
                </div>

                <button
                  type="button"
                  className="buttonEditProfile"
                >
                  <Link
                    to="/profile/edit"
                    className="linkStyle"
                  >
                    Edit profile

                  </Link>
                </button>
              </section>
            )

        }

      </div>
    );
  }
}

export default Profile;
