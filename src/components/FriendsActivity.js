import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import '../styles/friendsActivity.css';
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
              <div className="noHover">
                <div className="subtitle">
                  <p>Let friends and followers on Spotify</p>
                  <p>see what you&apos;re listening to.</p>
                </div>

                <div className="activities-container">
                  <div className="friend-activity">
                    <div className="friend-profile-picture">
                      <FontAwesomeIcon icon={ faUser } />
                    </div>
                    <div>
                      <p className="friend-name friend-no-activity-nm" />
                    </div>

                    <div className="info-friend-music">
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

                <div className="subtitle">
                  <p>Go to Seetings &gt; Social and enable</p>
                  <p>&apos;Share my listening activity on</p>
                  <p>Spotify.&apos; You can turn this off at any</p>
                  <p>time.</p>
                </div>

                <div className="divButtonSettings">
                  <Input
                    type="button"
                    value="S E T T I N G S"
                    className="buttonSettings"
                  />
                </div>
              </div>

            )
            : (
              <div>teste</div>
            )
        }

      </div>
    );
  }
}
