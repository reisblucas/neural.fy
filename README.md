<div align="center">
  <h1>neur4l.fy</h1>
</div>

## Project Overview:
- [SonarCloud](https://sonarcloud.io/project/overview?id=byneur4l_neur4l.fy);

## About:
The project is a React based, mostly made with Class Components and implemented Redux in middle of the project when I earned knowledge to apply the concept of global storage in my application and avoid prop drilling. In the beginning of the project, I want to make a Spotify clone and the required project was to make only some functionalities like favorite/unfavorite, with some restrictions about apresentation to the client, consume data from api and show in the page using React Life-Cycle.
So talking about the aesthetic side, it's a free choice and I want to go beyond and recreate the same design and functionalities of the Spotify app with Friends Activity and Player.

## Getting started:
### Before start:
3. Access [neur4l.fy](https://neuralfy.vercel.app/);
4. Type your name or at least three characters in Login and Password;
5. Type the artist name in Search field;
6. Discover my application.

### If you want to clone and test locally:
1. Clone the repository using SSH;
2. Via CLI Terminal, access the folder where you cloned the repository and type __**npm i**__ in the terminal;
3. __**npm start**__.

## Versions:
#### First version(branch: not connected + master):
- Leftside bar with favorite songs similar to playlists in Spotify;
- Searched musics in the 80% of the screen.
- Without Redux.

#### Second version(branch: master + canvas-v2):
- Redux integration;
- Friends activity bar;\
&nbsp;&nbsp; - Artist name + Song name interactive;

#### Latest version(branch: player):
- Introduce player in bottomside;
- Implement connection between song played, album/favorites route, Favorites Sidebar and Friends Activity Sidebar;
- Introduce Play/pause in Friends Activity Sidebar;
- Introduce Pause in Favorite Sidebar when playing favorite song;
- Introduce randomized friends in Friends Activity Sidebar;
- Friend last activity friend marker(blue sign ahead friend picture);
- Solved (#) bug that not reset to default album order in Album routes;
- Fix UI alignments in Album and some of code smells;
- Player music now is based in your last music played in the last time you visited; 
## Main features:

<div align="center">
  <h4>Spotify® logo or Search button in leftside bar:</h4>
</div>

1. By clicking in logo, you'll be redirected to the search page(/search) with the last search.

<div align="center">
  <h4>Search bar:</h4>
</div>

1. Search albums using the artist name;
2. Artist exists? -> Return results in page  | Else -> Return 'No results found for "your input search".';
3. Results will be rendered in the screen.

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
  <h4>Known Bugs:</h4>
</div>

- Delay when favorite button is clicked inside Album(promise in usersAPI is a main cause);
- Shuffle not working correctly in favorites page.

___

<details>
  <summary><h4>Goals:</h4></summary>
  <p>[ ] [0/20] - Remove the max of code smells until date 05/18.</p>
</details>

<details>
  <summary>Skills:</summary>
  <p>- Make requisitions and consume data provided by iTunes API;\</p>
  <p>- Use React Component Life-Cycle;\</p>
  <p>- Control states;\</p>
  <p>- Use route control with BrowserRouter;\</p>
  <p>- Create routes and map the correct path;\</p>
  <p>- Make persistent components to be showed in screen with Switch;\</p>
  <p>- React-Redux to store in global storage;\</p>
  <p>- Integration between app without Redux and implement Redux.</p>
</details>

<details>
  <summary>Challenges:</summary>
  - Make persistent components in Desktop, optimize for Mobile and Tablet Screens;
  - Begin integration with Redux, because when I started the project I hadn't the knowledge about Redux or Context API;
  - UI Alignment in Album filters with listed songs in Album and Favorite routes, because they use the same component;
  - Progress bar/volume bar, very difficult and it's not 100% optmized(CSS Optimization for Chrome only);
  - Remove keyboard from screen;
  - I didn't found a way to make a function to Zoom Out after trigger Input in mobile screens, so I used minimum requirements for some Browsers to not trigger;
  - CORS errors.
</details>

<details>
  <summary>Files provided by Trybe:</summary>
  src/services/\
  &nbsp;&nbsp;&nbsp; ↳ favoriteSongsAPI.js\
  &nbsp;&nbsp;&nbsp; ↳ musicsAPI.js\
  &nbsp;&nbsp;&nbsp; ↳ userAPI.js\
</details>

<details>
  <summary>Change logs:</summary>
  <a href="https://github.com/byneur4l/neur4l.fy/tree/master/changelogs" target="_blank" rel="noopener noreferrer">- Click here to be redirected to changelogs.</a>
</details>

___

<div align="center">
  <p>Project started on the day 14/02/2022 while student at Trybe and optimized in my spare time!</p>
  <p>:rocket::green_heart:</p>
  <p>neur4l ®</p>
</div>