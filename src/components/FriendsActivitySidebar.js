import { faPlay, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { idAlbumData, musicData } from '../data/friendsActivity/friendsData';
import '../styles/friendsActivity.css';
import FriendActivityDefault from './FriendActivityDefault';

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

        {
          !hasFriendActivity
            ? (
              <FriendActivityDefault />
            )
            : (
              <div className="father-activity">
                {
                  musicData.map((friend, i) => {
                    console.log('teste');
                    const { image, username, musicName, artistName } = friend;
                    return (
                      <div key={ i } className="friend-activity">
                        <div className="friend-profile-picture">
                          <img
                            className="friend-pp"
                            src={ image }
                            alt=""
                            width="50"
                            height="50"
                          />
                          <div className="friend-pp-icon-father">
                            <FontAwesomeIcon
                              icon={ faPlay }
                              className="friend-pp-icon-play"
                            />
                          </div>

                        </div>
                        <div className="friend-detail-info">
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
                            <p className="friend-icon-style">
                              ☉
                              <span
                                className="friend-playlist-name ellipsis"
                              >
                                Playlist name
                              </span>
                            </p>
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
