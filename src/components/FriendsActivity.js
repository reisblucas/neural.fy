import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import '../styles/friendsActivity.css';

export default class FriendsActivity extends Component {
  render() {
    return (
      <div className="friends-container-hero">
        <div className="headerActFrnd">
          <h4 className="title-hero">Friends Activity</h4>
          <FontAwesomeIcon icon={ faUserPlus } />
        </div>

        {/* Map da simulação dos amigos */}
        {/*
          - Div com foto
          - Nome user
          - Nome música
          - Nome artista
          - Nome da Playlist

        */}
      </div>
    );
  }
}

// const musicData = [
//   {
//     image: '',
//     username: '',
//     musicName: '',
//     artistName: '',
//     playlist: '',
//   },
// ];