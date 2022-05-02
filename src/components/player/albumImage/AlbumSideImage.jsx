import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleMusicNameClick } from '../../../helpers/artist-music-global';
import { getInStorage, saveInStorage } from '../../../services/localStorage';

function AlbumSideImage() {
  const store = useSelector((globalState) => ({
    played: globalState.musicsToPlayer.played,
  }));

  const { played } = store;
  const lastSong = getInStorage('lastSong'); // {} initial empty object

  if (played?.trackId && played?.trackId !== lastSong.trackId) {
    saveInStorage('lastSong', played);
  }

  return played?.trackId ? (
    <div className="pcsi">
      <Link
        to={ `/album/${played?.collectionId}` }
        onClick={ async () => {
          handleMusicNameClick(played?.artistName, played?.collectionId);
        } }
      >
        <img
          src={ played?.artworkUrl100.replace('100x100bb.jpg', '500x500bb.jpg') }
          alt="Current song album"
          className="pcsi-im"
        />
      </Link>
    </div>
  )
    : null;
}

export default AlbumSideImage;
