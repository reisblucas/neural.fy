import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

export default class HeartButton extends Component {
  render() {
    const { artist: {
      // artistId,
      artistName,
      // artworkUrl30,
      artworkUrl60,
      // artworkUrl100,
      collectionName,
      // collectionCensoredName,
      // collectionExplicitness,
      // collectionId,
      previewUrl,
      trackId,
      trackName,
      trackNumber,
      trackTimeMillis,
    }, state: {handleCheck, checkedAndFavorite}
    } = this.props;

    console.log(this.props);
    return (
      <div>
      </div>
    )
    // return (
    //   <div>
    //     {
    //       checkedAndFavorite.includes(trackId)
    //         ? (
    //           <label htmlFor={ trackId } className="previewFavorite">
    //             <FontAwesomeIcon
    //               icon={ faHeart }
    //               className="focusable heartColor"
    //             />
    //             <input
    //               type="checkbox"
    //               name=""
    //               id={ trackId }
    //               data-testid={ `checkbox-music-${trackId}` }
    //               onChange={ () => {
    //                 handleCheck(artist, trackId);
    //               } }
    //               checked={ checkedAndFavorite.includes(trackId) }
    //               hidden
    //             />
    //           </label>
    //         )
    //         : (
    //           <label htmlFor={ trackId } className="previewFavorite">
    //             <FontAwesomeIcon icon={ faHeart } className="heartIcon" />
    //             <input
    //               type="checkbox"
    //               name=""
    //               id={ trackId }
    //               data-testid={ `checkbox-music-${trackId}` }
    //               onChange={ () => {
    //                 handleCheck(artist, trackId);
    //               } }
    //               checked={ checkedAndFavorite.includes(trackId) }
    //               hidden
    //             />
    //           </label>
    //         )
    //     }
    //   </div>
    // );
  }
}
