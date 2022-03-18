import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import '../styles/friendsActivity.css';

// Images imports
import capuchinMonkey1 from '../images/friendsActivityProfile/capuchin-monkey-1.webp';
import capuchinMonkey2 from '../images/friendsActivityProfile/capuchin-monkey-2.webp';
import cattoFisherhat from '../images/friendsActivityProfile/catto-inside-fisherhat.jpg';
import chonkyGreyCat from '../images/friendsActivityProfile/chonky-grey-cat.png';
import couplePhoto from '../images/friendsActivityProfile/couple-photo.jpeg';
import cryptopunkBlue from '../images/friendsActivityProfile/cryptopunk-blue.jpg';
import chonkyOrangeCat from '../images/friendsActivityProfile/fat-cat.webp';
import fortSuperHero from '../images/friendsActivityProfile/fortnite-superhero.webp';
import eiffelTower from '../images/friendsActivityProfile/french-eiffel-tower.jpg';
import frenchVisa from '../images/friendsActivityProfile/french-visa-1920x1080.jpg';
import girlPic from '../images/friendsActivityProfile/girl-picture.jpeg';
import logitechLogo from '../images/friendsActivityProfile/logitech-logo.png';
import nftBieber from '../images/friendsActivityProfile/nft-bieber.jpg';
import personInACarTrip from '../images/friendsActivityProfile/person-in-trip.jpeg';
import personInACarTrip2 from '../images/friendsActivityProfile/person-in-cartrip-2.jpg';
import pugHappy from '../images/friendsActivityProfile/pug-happy-3.webp';
import pugLyingDownHappy from '../images/friendsActivityProfile/pug-happy.jpg';
import pugSeatedHappy from '../images/friendsActivityProfile/pug-profile-happy.jpg';
import sunshine from '../images/friendsActivityProfile/sunshie.jpeg';
import vacation from '../images/friendsActivityProfile/vacation.png';

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
        <img src={ monkey } width="200 " alt="teste" />
      </div>
    );
  }
}

const idAlbumData = [
  { 1440642493: 'Take Care (Deluxe Version)' },
  // { 1451901307: 'Graduation'},
  // { 1578986656: 'Cold Heart (PNAU Remix) - Single'},
  // { 395711243: 'Mozart - 100 Supreme Classical Masterpieces: Rise of the Masters'},
  // { 1440841363: 'Views'},
  // { 1423284802: 'Cross Road'},
  // { 273714443: 'Toxicity'},
  // { 1440783617: 'Nevermind'},
  // { 1442845496: 'Construção'},
  // { 1421241217: 'ASTROWORLD'},
  // { 1462912754: 'My Girl - Single'},
  // { 1346689058: 'Wild Kidz - Single'},
  // { 1440763429: 'Greatest Hits'},
  // { 203880450: 'The Best of Depeche Mode, Vol. 1 (Deluxe Version)'},
  // { 824700396: 'The Devil's Walk'},
  // { 266222258: 'A Flock of Seagulls'},
  // { 933067562: 'Dancin (feat. Luvli) [Krono Remix] - Single'},
  // { 1440650816: 'A Night at the Opera (Deluxe Edition)'},
  // { 574043989: 'Highway to Hell'},
  // { 1445662840: 'Timeless: The All-Time Greatest Hits'},
  // { 902620286: 'Led Zeppelin IV (Deluxe Edition)'},
];

const musicData = [
  {
    image: '../images/friendsActivityProfile/fortnite-superhero.webp',
    username: 'Lucas',
    musicName: 'Over My Dead Body',
    artistName: 'Drake',
  },
  {
    image: '../images/friendsActivityProfile/capuchin-monkey-1507180_1280.webp',
    username: 'Stephano',
    musicName: 'Over My Dead Body',
    artistName: 'Drake',
  },
  {
    image: '../images/friendsActivityProfile/capuchin-monkey-3416387_960_720.webp',
    username: '',
    musicName: '',
    artistName: '',
  },
  {
    image: '',
    username: '',
    musicName: '',
    artistName: '',
  },
  {
    image: '',
    username: '',
    musicName: '',
    artistName: '',
  },
  {
    image: '',
    username: '',
    musicName: '',
    artistName: '',
  },
  {
    image: '',
    username: '',
    musicName: '',
    artistName: '',
  },
  {
    image: '',
    username: '',
    musicName: '',
    artistName: '',
  },
  {
    image: '',
    username: '',
    musicName: '',
    artistName: '',
  },
  {
    image: '',
    username: '',
    musicName: '',
    artistName: '',
  },
  {
    image: '',
    username: '',
    musicName: '',
    artistName: '',
  },
  {
    image: '',
    username: '',
    musicName: '',
    artistName: '',
  },
  {
    image: '',
    username: '',
    musicName: '',
    artistName: '',
  },
  {
    image: '',
    username: '',
    musicName: '',
    artistName: '',
  },
  {
    image: '',
    username: '',
    musicName: '',
    artistName: '',
  },
  {
    image: '',
    username: '',
    musicName: '',
    artistName: '',
  },
];
