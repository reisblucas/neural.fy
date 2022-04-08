import React from 'react';
import { connect } from 'react-redux';
import '../styles/playerBottomSide.css';

export const PlayerBottomSide = () => (
  <div className="player-container">
    <div className="music-player-info">
      <p className="music-name-player tdh tc">Music name</p>
      <p className="artist-name-player tdh tc">Artist</p>
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

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {}; //

// export default connect(mapStateToProps, mapDispatchToProps)(PlayerBottomSide);

export default connect()(PlayerBottomSide);
