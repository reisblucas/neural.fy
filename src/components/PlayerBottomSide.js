import {
  faBackwardStep, faForwardStep, faHeart,
  faPause, faPlay, faRepeat,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../styles/playerBottomSide.css';

export const PlayerBottomSide = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // const [isFavorite, setIsFavorite] = useState(false);

  // const handlePlayButton = () => {

  // }

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
        <div>
          <button type="button"> shuffle </button>

          <button type="button">
            <FontAwesomeIcon icon={ faBackwardStep } />
          </button>

          <button
            type="button"
            onClick={ () => setIsPlaying(!isPlaying) }
          >
            {
              isPlaying
                ? <FontAwesomeIcon icon={ faPause } />
                : <FontAwesomeIcon icon={ faPlay } />
            }
          </button>

          <button type="button">
            <FontAwesomeIcon icon={ faForwardStep } />
          </button>

          <button type="button">
            <FontAwesomeIcon icon={ faRepeat } />
          </button>
        </div>
        <p>lagalagalgalalga</p>
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
