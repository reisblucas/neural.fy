import PropTypes from 'prop-types';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import isFavoriteSong from '../../../helpers/favorites/isFavoriteSong';
import LinkArtistName from '../../LinkArtistName';
import LinkMusicName from '../../LinkMusicName';
import toggleFavorite from '../../../helpers/favorites/toggleFavorite';

function PlayerArtistInfo({ played, toToggle }) {
  const { artistName, collectionId, trackName } = played;
  const { favoritesToSidebar } = toToggle;

  return (
    <div className="music-player-info">
      <div className="artist-infos">
        <LinkMusicName
          linkClassName="friend-music-name"
          paragraphClassName="music-name-player tdh tc ellipsis"
          collectionId={ collectionId }
          artistName={ artistName }
          paragraph={ trackName }
        />

        <LinkArtistName
          linkClassName="friend-music-name"
          paragraphClassName="artist-name-player tdh tc ellipsis"
          paragraph={ artistName }
        />
      </div>
      <div className="favorite-player-container">
        {
          played?.previewUrl && (
            <label htmlFor="fbp">
              <input type="checkbox" id="fbp" name="" hidden />
              {
                isFavoriteSong(favoritesToSidebar, played)
                  ? (
                    <FontAwesomeIcon
                      icon={ faHeart }
                      className="heartIcon-player"
                      onClick={ () => toggleFavorite(toToggle) }
                    />
                  )
                  : (
                    <FaRegHeart
                      className="hip-unfav"
                      onClick={ () => toggleFavorite(toToggle) }
                    />
                  )
              }
            </label>
          )
        }
      </div>
    </div>
  );
}

PlayerArtistInfo.propTypes = {
  played: PropTypes.shape({
    artistName: PropTypes.string,
    collectionId: PropTypes.number,
    previewUrl: PropTypes.string,
    trackName: PropTypes.string,
  }),
}.isRequired;

export default PlayerArtistInfo;
