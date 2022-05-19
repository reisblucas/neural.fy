import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterComplete from '../components/footer/FooterComplete';
import Loading from '../components/Loading';
import ProfilePicture from '../components/profile/ProfilePicture';
import iphoneMaxWidth from '../helpers/screen/iphoneMaxWidth';
import vw from '../helpers/screen/vw';
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

        {
          isLoading ? <Loading />
            : (
              <section data-testid="page-profile" className="pageProfile  patternPages">
                <h1 className="titlePage">Profile page</h1>

                <ProfilePicture image={ image } />

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

        {
          vw <= iphoneMaxWidth
          && <FooterComplete />
        }
      </div>
    );
  }
}

export default Profile;
