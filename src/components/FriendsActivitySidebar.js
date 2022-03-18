import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { idAlbumData, musicData } from '../data/friendsActivity/friendsData';
import '../styles/friendsActivity.css';
import FriendActivityDefault from './FriendActivityDefault';

export default class FriendsActivity extends Component {
  state = {
    hasFriendActivity: true,
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
                    <div className="info-friend-music">
                      <p className="friend-music-name friend-no-activity-am" />
                      <p className="friend-artist-name friend-no-activity-am" />
                    </div>
                    <p className="friend-name friend-no-activity-nm" />
                  </div>
                </div>

                <div className="friend-activity">
                  <div className="friend-profile-picture">
                    <FontAwesomeIcon icon={ faUser } />
                  </div>
                  <div>
                    <p className="friend-name friend-no-activity-nm" />
                    <div className="info-friend-music">
                      <p className="friend-music-name friend-no-activity-am" />
                      <p className="friend-artist-name friend-no-activity-am" />
                    </div>
                    <p className="friend-name friend-no-activity-nm" />
                  </div>
                </div>

                {
                  musicData.map((friend, i) => {
                    console.log('teste');
                    const { image, username, musicName, artistName } = friend;
                    return (
                      <div key={ idAlbumData[i] } className="friend-activity">
                        <div className="friend-profile-picture">
                          <div className="friend-pp-hover">
                            <img
                              className="friend-pp"
                              src={ image }
                              alt=""
                              width="50"
                              height="50"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="friend-name-ellipsis">
                            <p className="friend-name">{username}</p>
                            {/* FONT ICON // MUSIC TIMER */}
                          </div>
                          <div className="info-friend-music">
                            <div className="friend-music-ellipsis">
                              <p className="friend-music-name ellipsis">{musicName}</p>
                            </div>
                            <p> • </p>
                            <div className="friend-music-ellipsis">
                              <p className="friend-artist-name ellipsis">{artistName}</p>
                            </div>
                          </div>
                          <div className="friend-playlist-ellipsis">
                            <p className="friend-playlist-name">Playlist name</p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            )
        }

      </div>
    );
  }
}
