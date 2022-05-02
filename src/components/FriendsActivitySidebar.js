import PropTypes from 'prop-types';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IoPlaySharp } from 'react-icons/io5';
import { GiPauseButton } from 'react-icons/gi';
import { musicData } from '../data/friendsActivity/friendsData';
import '../styles/friendsActivity.css';
import FriendActivityDefault from './FriendActivityDefault';
import LinkMusicName from './LinkMusicName';
import LinkArtistName from './LinkArtistName';
import { handlePauseInFriend, handlePlayInFriend } from '../helpers/artist-music-global';

class FriendsActivitySidebar extends Component {
  state = {
    hasFriendActivity: false,
    renderFriends: 19,
    friendActivityAnimation: 'friend-activity friend-activity-opacity-start',
    friendsIntervalID: '',
  }

  componentDidMount() {
    // const TWO_MIN_IN_MS = 120000;
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

  shouldComponentUpdate(_nextProps, { renderFriends, friendsIntervalID }) {
    const TWENTY = 20;
    if (renderFriends === TWENTY) { clearInterval(friendsIntervalID); }
    return true;
  }

  componentWillUnmount() {
    const { friendsIntervalID } = this.state;
    clearInterval(friendsIntervalID);
  }

  render() {
    const { hasFriendActivity, renderFriends, friendActivityAnimation } = this.state;
    const musicDataClone = [...musicData];
    const musicDataSliced = musicDataClone.slice(0, renderFriends); // usar esse no map
    const { played } = this.props;

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

                    const conditionForPlayAndPause = played?.status
                      && played?.collectionId === collectionId
                      && played?.trackName === musicName;

                    if (i === (renderFriends - 1)) {
                      return (
                        <div key={ i } className={ friendActivityAnimation }>
                          <div className="friend-profile-picture">
                            <img
                              className="friend-pp"
                              src={ image }
                              alt=""
                            />
                            <button
                              type="button"
                              className="friend-pp-icon-father fpi-reset"
                              onClick={ () => {
                                if (played.status) {
                                  return handlePauseInFriend();
                                }
                                handlePlayInFriend(collectionId, musicName);
                              } }
                            >
                              {
                                conditionForPlayAndPause
                                  ? (
                                    <GiPauseButton
                                      className="friend-pp-icon-play fpi-p"
                                    />
                                  )
                                  : <IoPlaySharp className="friend-pp-icon-play" />
                              }
                            </button>

                          </div>
                          <div className="friend-detail-info">
                            <div className="friend-name-ellipsis">
                              <p className="friend-name">{username}</p>
                              {/* FONT ICON // MUSIC TIMER */}
                            </div>
                            <div className="info-friend-music">
                              <div className="friend-music-ellipsis">
                                <LinkMusicName
                                  linkClassName="friend-music-name"
                                  paragraphClassName="friend-music-name ellipsis"
                                  collectionId={ collectionId }
                                  artistName={ artistName }
                                  paragraph={ musicName }
                                />

                              </div>
                              <p className="fa-bp"> • </p>
                              <div className="friend-music-ellipsis">
                                <LinkArtistName
                                  linkClassName="friend-artist-name"
                                  paragraphClassName="friend-artist-name ellipsis"
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
                          <button
                            type="button"
                            className="friend-pp-icon-father fpi-reset"
                            onClick={ () => {
                              if (played?.status && played?.trackName === musicName) {
                                console.log('pausei no clique');
                                return handlePauseInFriend();
                              }
                              handlePlayInFriend(collectionId, musicName);
                            } }
                          >
                            {
                              conditionForPlayAndPause
                                ? <GiPauseButton className="friend-pp-icon-play fpi-p" />
                                : <IoPlaySharp className="friend-pp-icon-play" />
                            }

                          </button>

                        </div>
                        <div className="friend-detail-info">
                          <div className="friend-name-ellipsis">
                            <p className="friend-name">{username}</p>
                            {/* FONT ICON // MUSIC TIMER */}
                          </div>
                          <div className="info-friend-music">
                            <div className="friend-music-ellipsis">
                              <LinkMusicName
                                linkClassName="friend-music-name"
                                paragraphClassName="friend-music-name ellipsis"
                                collectionId={ collectionId }
                                artistName={ artistName }
                                paragraph={ musicName }
                              />
                            </div>
                            <p className="fa-bp"> • </p>
                            <div className="friend-music-ellipsis">
                              <LinkArtistName
                                linkClassName="friend-artist-name"
                                paragraphClassName="friend-artist-name ellipsis"
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
  played: PropTypes.shape({
    collectionId: PropTypes.number,
    status: PropTypes.bool,
    trackName: PropTypes.string,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  played: state.musicsToPlayer.played,
});

export default connect(mapStateToProps, null)(FriendsActivitySidebar);
