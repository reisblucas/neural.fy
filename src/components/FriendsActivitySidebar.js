import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import '../styles/friendsActivity.css';
import FriendActivityDefault from './FriendActivityDefault';
import Input from './Input';

export default class FriendsActivity extends Component {
  state = {
    hasFriendActivity: false,
  }

  render() {
    const { hasFriendActivity } = this.state;

    return (
      <div className="friends-container-hero">
        <div className="headerActFrnd">
          <h4 className="title-hero">Friends Activity</h4>
          <FontAwesomeIcon icon={ faUserPlus } />
        </div>

        {/* Map da simulação dos amigos */}
        {/*
          - Div com foto
          - Nome user
          - Nome música
          - Nome artista
          - Nome da Playlist

        */}
        {
          !hasFriendActivity
            ? (
              <FriendActivityDefault />
            )
            : (
              <div className="activities-container">
                <div className="friend-activity">
                  <div className="friend-profile-picture">
                    <FontAwesomeIcon icon={ faUser } />
                  </div>
                  <div>
                    <p className="friend-name friend-no-activity-nm" />
                    <p className="friend-music-name friend-no-activity-am" />
                    <p className="friend-artist-name friend-no-activity-am" />
                  </div>

                </div>

                <div className="friend-activity">
                  <div className="friend-profile-picture">
                    <FontAwesomeIcon icon={ faUser } />
                  </div>
                  <div>
                    <p className="friend-name friend-no-activity-nm" />
                    <p className="friend-music-name friend-no-activity-am" />
                    <p className="friend-artist-name friend-no-activity-am" />
                  </div>
                </div>

                <div className="friend-activity">
                  <div className="friend-profile-picture">
                    <FontAwesomeIcon
                      icon={ faUser }
                      className="fa-profile-no-activity"
                    />
                  </div>
                  <div>
                    <p className="friend-name friend-no-activity-nm" />
                    <p className="friend-music-name friend-no-activity-am" />
                    <p className="friend-artist-name friend-no-activity-am" />
                  </div>
                </div>
              </div>
            )
        }

      </div>
    );
  }
}
