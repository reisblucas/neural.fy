import {
  faBackwardStep, faForwardStep, faHeart,
  faPause, faPlay, faRepeat, faShuffle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../styles/playerBottomSide.css';

export const PlayerBottomSide = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // const [isFavorite, setIsFavorite] = useState(false);

  const handlePlayButton = () => { setIsPlaying(!isPlaying); };

  return (
    <div className="player-container">
      <div className="music-player-info">
        <div className="artist-infos">
          <p className="music-name-player tdh tc">Music name</p>
          <p className="artist-name-player tdh tc">Artist</p>
        </div>
        <div className="favorite-player-container">
          {/* <label htmlFor="fav-button-player"> */}
          <label htmlFor="fbp">
            <input type="checkbox" id="fbp" name="" id="" />
            <FontAwesomeIcon icon={ faHeart } className="heartIcon-player" />
          </label>
          {/* </label> */}
        </div>
      </div>

      <div className="central-player-buttons">
        <div className="tsp-w mb-5">
          <div className="tsp">
            <button
              type="button"
              className="control-player-buttons"
            >
              <FontAwesomeIcon
                icon={ faShuffle }
                className="tsp-i"
              />
            </button>

            <button
              type="button"
              className="control-player-buttons"
            >
              <FontAwesomeIcon
                icon={ faBackwardStep }
                className="tsp-i"
              />
            </button>

            <button
              type="button"
              className="control-player-buttons pb"
              onClick={ handlePlayButton }
            >
              {
                isPlaying
                  ? <FontAwesomeIcon className="pbcs" icon={ faPause } />
                  : <FontAwesomeIcon className="pbcs" icon={ faPlay } />
              }
            </button>

            <button
              type="button"
              className="control-player-buttons"
            >
              <FontAwesomeIcon
                icon={ faForwardStep }
                className="tsp-i"
              />
            </button>

            <button
              type="button"
              className="control-player-buttons"
            >
              <FontAwesomeIcon
                icon={ faRepeat }
                className="tsp-i"
              />
            </button>
          </div>
        </div>

        <div className="bsp">

          {/* duration before */}
          <div className="dfs mr-5">
            0:00
          </div>

          <input type="range" className="progress-bar" id="" />

          {/* duration total */}
          <div className="dfs ml-5">
            5:00
          </div>
        </div>
      </div>

      <div className="right-player-buttons">
        <div>buttons / volume</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  musicsToPlayer: state.musicsToPlayer,
});

// const mapDispatchToProps = {}; //

// export default connect(mapStateToProps, mapDispatchToProps)(PlayerBottomSide);

export default connect(mapStateToProps)(PlayerBottomSide);
