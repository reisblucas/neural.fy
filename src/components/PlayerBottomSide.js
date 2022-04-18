import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../styles/playerBottomSide.css';

export const PlayerBottomSide = () => {
  const [isFavorite, setIsFavorite] = useState(false);

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
        <div>player</div>
        <p>lagalagalgalalga</p>
      </div>

      <div className="right-player-buttons">
        <div>buttons / volume</div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {}; //

// export default connect(mapStateToProps, mapDispatchToProps)(PlayerBottomSide);

export default connect()(PlayerBottomSide);