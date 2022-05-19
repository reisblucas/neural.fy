<div align="center">
  <h1>neur4l.fy</h1>
</div>

<div align="center">
  <img src="/app-demonstration/gifs/spotify-last-session.gif" alt="Demonstration of my application working!">
</div>

## Project Overview:
- [SonarCloud](https://sonarcloud.io/project/overview?id=byneur4l_neur4l.fy)

## Getting started:
1. Access [neur4l.fy](https://neuralfy.vercel.app/);
2. Type your name or at least *__three characters__* in Login and Password;
3. Type the artist name in Search field;
4. Discover my application.

### If you want to clone and test locally:
1. Clone the repository using SSH;
2. Via CLI Terminal, access the folder where you cloned the repository and type `npm i` in the terminal;
3. `npm start`.
4. Open your browser with localhost:3000 as URL!

## Built with:
&nbsp;- [ReactJS](https://reactjs.org/);\
&nbsp;- [React Redux](https://react-redux.js.org/);\
&nbsp;- [react-icons](https://react-icons.github.io/react-icons/);\
&nbsp;- Pure CSS and Globally.


## Main features:

<div align="center">
  <h4>Spotify® logo or Search button in leftside bar:</h4>
</div>

1. By clicking in logo, you'll be redirected to the search page(/search) with the last search.

<div align="center">
  <h4>Search bar:</h4>
</div>

1. Search albums using the artist name;
2. Artist exists?\
&nbsp;&nbsp; Yes → Return results in page.\
&nbsp;&nbsp; No → Return 'No results found for "your input search".'
3. Result will be rendered in the screen.

___

<div align="center">
  <h4>Albums/Favorites:</h4>
</div>

1. Play and stop songs;
2. Favorite and disfavor songs;
3. Filter by title name, album name, duration time and reset filter(#);
4. User profile picture beside of Album picture. 

___

<div align="center">
  <h4>Menu bar:</h4>
</div>

1. Search;
2. Favorites;
3. Profile;
5. Favorites songs in place of playlists;
6. Pause favorite song if it is playing.

___

<div align="center">
  <h4>Interactive Friends Activity:</h4>
</div>

1. Play/pause in friends picture;
2. Songs name: redirect to the album song;
3. Artist name: show albums of the artist.

___

<div align="center">
  <h4>Interactive Player:</h4>
</div>

#### Leftside:
1. Album picture redirects to the album page;
2. Artist name too;
3. Song name: redirect to the album song;
4. Favorite/unfavorite songs.

#### Center:
1. Shuffle/unshuffle;
2. Prev/next songs;
3. Play/pause songs;
4. Repeat current song;
5. Set the time on progress bar.

#### Rightside:
1. Github icon: redirects to my [Github](https://github.com/byneur4l);
2. Linkedin icon: redirects to my [Linkedin](https://www.linkedin.com/in/reisblucas/);
3. Paper icon: redirects to this current documentation.

##### &nbsp;&nbsp; Volume:
1. Mute/unmute;
2. Set the sound volume.

___

<div align="center">
  <h4>Profile:</h4>
</div>

1. Edit:\
&nbsp;&nbsp; - Name;\
&nbsp;&nbsp; - E-mail;\
&nbsp;&nbsp; - Picture(based in picture URL);\
&nbsp;&nbsp; - Description.
2. After changing the profile info, it will be modified globally.

___

<div align="center">
  <h4>App demonstration</h4>
  
  <div>
     <h5>iPhone:</h5>
     <img src="/app-demonstration/screenshots/iphone/acdc-album.png" height="500">
     <img src="/app-demonstration/gifs/spotify-cl-mobile-login-to-album.gif" height="500">
  </div>

  <div width="200">
    <h5>iPad Air and Pro:</h5>
    <img src="/app-demonstration/screenshots/ipad/album-ipadair.png" height="500">
    <img src="/app-demonstration/screenshots/ipad/album-ipadpro.png" height="500">
  </div>
</div>

___

<div align="center">
  <h4>Known Bugs:</h4>
</div>

- Delay when favorite button is clicked inside Album(promise in usersAPI is a main cause);
- Shuffle not working correctly in favorites page locally.
- When is on the last song in that collection and 30s is fullfiled, next song is the second in that collection.

___

<details>
  <summary><strong>Project story:</strong></summary>

  In the beginning of the project, I want to make a Spotify clone and the required project was to make only some functionalities like favorite/unfavorite, with some restrictions about apresentation to the client, consume data from api and show in the page using React Life-Cycle.
  So talking about the aesthetic side, it's a free choice and I want to go beyond and recreate the same design and functionalities of the Spotify app with Friends Activity and Player.

</details>

<details>
  <summary><strong>Goals:</strong></summary>

  - [X] [20/20] - Remove the max of code smells until date 05/18. (Fullfilled 05/19)

</details>

<details>
  <summary><strong>Skills:</strong></summary>

  &nbsp; - Make requisitions and consume data provided by iTunes API;\
  &nbsp; - Use React Component Life-Cycle;\
  &nbsp; - Control states;\
  &nbsp; - Use route control with BrowserRouter;\
  &nbsp; - Create routes and map the correct path;\
  &nbsp; - Make persistent components to be showed in screen with Switch;\
  &nbsp; - React-Redux to store in global storage;\
  &nbsp; - Integration between app without Redux and implement Redux.

</details>

<details>
  <summary><strong>Challenges:</strong></summary>

  &nbsp; - Make persistent components in Desktop, optimize for Mobile and Tablet Screens;\
  &nbsp; - Begin integration with Redux, because when I started the project I hadn't the knowledge about Redux or Context API;\
  &nbsp; - UI Alignment in Album filters with listed songs in Album and Favorite routes, because they use the same component;\
  &nbsp; - Progress bar/volume bar, very difficult and it's not 100% optmized(CSS Optimization for Chrome only);\
  &nbsp; - Remove keyboard from screen;\
  &nbsp; - I didn't found a way to make a function to Zoom Out after trigger Input in mobile screens, so I used minimum requirements for some Browsers to not trigger;\
  &nbsp; - CORS errors and was the last thing I solved.

</details>

<details>
  <summary><strong>Files provided by Trybe:</strong></summary>

  &nbsp; src/services/\
  &nbsp; &nbsp;&nbsp;&nbsp; ↳ favoriteSongsAPI.js\
  &nbsp; &nbsp;&nbsp;&nbsp; ↳ getSongsAPI.js\
  &nbsp; &nbsp;&nbsp;&nbsp; ↳ userAPI.js

</details>

<details>
  <summary><strong>Change logs:</strong></summary>

  [&nbsp; - Changelogs(folder ./changelogs).](https://github.com/byneur4l/neur4l.fy/tree/master/changelogs)

</details>

___

<div align="center">
  <p>Project started on the day 14/02/2022 while student at Trybe and optimized in my spare time!</p>
  <p>:rocket::green_heart:</p>
  <p>neur4l ©</p>
</div>
