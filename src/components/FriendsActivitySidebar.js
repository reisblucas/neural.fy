import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IoPlaySharp } from 'react-icons/io5';
import { GiPauseButton } from 'react-icons/gi';
import { BsPerson } from 'react-icons/bs';

import { musicData } from '../data/friendsActivity/friendsData';
import '../styles/friendsActivity.css';
import FriendActivityDefault from './FriendActivityDefault';
import LinkMusicName from './LinkMusicName';
import LinkArtistName from './LinkArtistName';
import { handlePauseInFriend, handlePlayInFriend } from '../helpers/artist-music-global';
import shuffler from '../helpers/shuffle/shuffler';

class FriendsActivitySidebar extends Component {
  state = {
    hasFriendActivity: false,
    renderFriends: 0,
    friendActivityAnimation: 'friend-activity friend-activity-opacity-start',
    friendsIntervalID: '',
    dataShuffled: [],
  }

  componentDidMount() {
    const TWO_MIN_IN_MS = 60000;

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

    const dataShuffled = this.friendDataNewOrder();
    this.setState((prevState) => ({ ...prevState, friendsIntervalID, dataShuffled }));
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

  friendDataNewOrder = () => {
    const musicDataClone = [...musicData];
    const orderToShowFriends = shuffler(musicDataClone);

    return musicDataClone.map((_frnd, i) => musicDataClone[orderToShowFriends[i]]);
  }

  render() {
    const { hasFriendActivity, renderFriends, friendActivityAnimation,
      dataShuffled,
    } = this.state;
    const { played } = this.props;

    const friendsToShow = dataShuffled.slice(0, renderFriends);

    return (
      <div className="friends-container-hero">
        <div className="headerActFrnd">
          <p className="title-hero">Friends Activity</p>
          <BsPerson className="af-i" />
          <div className="af-p">+</div>
          <div className="af-b" />
        </div>

        {
          !hasFriendActivity
            ? (
              <FriendActivityDefault />
            )
            : (
              <div className="father-activity">
                {
                  friendsToShow.map((friend, i) => {
                    const { image, username, musicName,
                      artistName, collectionId, playlist } = friend;

                    const conditionForPlayAndPause = played?.status
                      && played?.collectionId === collectionId
                      && played?.trackName === musicName;

                    const conditionForFirstFriend = (i === (renderFriends - 1));

                    return (
                      <div
                        key={ i }
                        className={ conditionForFirstFriend
                          ? friendActivityAnimation
                          : 'friend-activity' }
                      >
                        <div className="friend-profile-picture">
                          {
                            conditionForFirstFriend
                            && <div className="fa-m" />
                          }
                          <img
                            className="friend-pp"
                            src={ image }
                            alt=""
                          />
                          <button
                            type="button"
                            className="friend-pp-icon-father fpi-reset"
                            onClick={ () => {
                              const conditionToPauseInFriends = played.status
                              && played?.trackName === musicName;

                              if (conditionToPauseInFriends) { // to pause the same music and play another
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
                            {
                              conditionForFirstFriend
                              && <img
                                src="https://open.scdn.co/cdn/images/equaliser-green.1184ed87.svg"
                                className="fa-on"
                                alt=""
                              />
                            }
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
