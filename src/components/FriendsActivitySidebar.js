import PropTypes from 'prop-types';
import { faPlay, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enableRenderAlbumAct, inputSearchAct } from '../actions';
import { musicData } from '../data/friendsActivity/friendsData';
import '../styles/friendsActivity.css';
import fetchMusics from '../thunk/fetchMusicsInRedux';
import FriendActivityDefault from './FriendActivityDefault';
import LinkFriendActivity from './LinkFriendActivity';
import LinkArtistName from './LinkArtistName';
import fetchAlbumInRedux from '../thunk/fetchAlbumInRedux';

class FriendsActivitySidebar extends Component {
  state = {
    hasFriendActivity: false,
    renderFriends: 0,
    friendActivityAnimation: 'friend-activity friend-activity-opacity-start',
    friendsIntervalID: '',
  }

  componentDidMount() {
    const TWO_MIN_IN_MS = 1000;

    const friendsIntervalID = setInterval(() => {
      this.setState(({ renderFriends }) => ({
        renderFriends: renderFriends + 1,
        hasFriendActivity: true,
        friendActivityAnimation: 'friend-activity friend-activity-opacity-start',
      }));
      setTimeout(() => this.setState({
        friendActivityAnimation: 'friend-activity friend-activity-opacity-end',
      }), 100);
    },
    TWO_MIN_IN_MS);

    this.setState({ friendsIntervalID });
  }

  shouldComponentUpdate(nextProps, { renderFriends, friendsIntervalID }) {
    const TWENTY = 20;
    if (renderFriends === TWENTY) { clearInterval(friendsIntervalID); }
    return true;
  }

  componentWillUnmount() {
    const { friendsIntervalID } = this.state;
    clearInterval(friendsIntervalID);
  }

  handleMusicNameClick = async (artistName, collectionId) => {
    const { fetchAlbumThunk, fetchMusicsThunk, inputSearchGlobal } = this.props;
    fetchAlbumThunk(artistName);
    fetchMusicsThunk(collectionId);
    await inputSearchGlobal(artistName);
  }

  handleArtistNameClick = async ({ target: { innerText } }) => {
    const { inputSearchGlobal, fetchAlbumThunk, enableRender } = this.props;
    inputSearchGlobal(innerText);
    await fetchAlbumThunk(innerText);
    enableRender(true);
  }

  render() {
    const { hasFriendActivity, renderFriends, friendActivityAnimation } = this.state;
    const musicDataClone = [...musicData];
    const musicDataSliced = musicDataClone.slice(0, renderFriends); // usar esse no map

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
                  musicDataSliced.map((friend, i) => {
                    const { image, username, musicName,
                      artistName, collectionId, playlist } = friend;

                    if (i === (renderFriends - 1)) {
                      return (
                        <div key={ i } className={ friendActivityAnimation }>
                          <div className="friend-profile-picture">
                            <img
                              className="friend-pp"
                              src={ image }
                              alt=""
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
                                <LinkFriendActivity
                                  collectionId={ collectionId }
                                  artistName={ artistName }
                                  paragraph={ musicName }
                                  handleMusicNameClick={ () => this
                                    .handleMusicNameClick(artistName, collectionId) }
                                />

                              </div>
                              <p> • </p>
                              <div className="friend-music-ellipsis">
                                <LinkArtistName
                                  handleArtistNameClick={ this.handleArtistNameClick }
                                  paragraph={ artistName }
                                />
                              </div>
                            </div>
                            <div className="fpe ellipsis">
                              <p className="friend-icon-style ellipsis">
                                ♬
                                <span
                                  className="friend-playlist-name ellipsis"
                                >
                                  {playlist}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div key={ i } className="friend-activity">
                        <div className="friend-profile-picture">
                          <img
                            className="friend-pp"
                            src={ image }
                            alt=""
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
                              <LinkFriendActivity
                                collectionId={ collectionId }
                                artistName={ artistName }
                                paragraph={ musicName }
                                handleMusicNameClick={ () => this
                                  .handleMusicNameClick(artistName, collectionId) }
                              />
                            </div>
                            <p> • </p>
                            <div className="friend-music-ellipsis">
                              <LinkArtistName
                                handleArtistNameClick={ this.handleArtistNameClick }
                                paragraph={ artistName }
                              />
                            </div>
                          </div>
                          <div className="fpe ellipsis">
                            <p className="friend-icon-style ellipsis">
                              ♬
                              <span
                                className="friend-playlist-name ellipsis"
                              >
                                {playlist}
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

FriendsActivitySidebar.propTypes = {
  enableRender: PropTypes.func,
  fetchAlbumThunk: PropTypes.func,
  fetchMusicsThunk: PropTypes.func,
  inputSearchGlobal: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  fetchAlbumThunk: (artistName) => dispatch(fetchAlbumInRedux(artistName)),
  fetchMusicsThunk: (albumId) => dispatch(fetchMusics(albumId)),

  inputSearchGlobal: (inputValue) => dispatch(inputSearchAct(inputValue)),
  enableRender: (bool) => dispatch(enableRenderAlbumAct(bool)),
});

export default connect(null, mapDispatchToProps)(FriendsActivitySidebar);
