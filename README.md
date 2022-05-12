<div align="center">
  <h1>neur4l.fy</h1>
</div>

## Project Overview:
- [SonarCloud](https://sonarcloud.io/project/overview?id=byneur4l_neur4l.fy);
- [ ] [0/20] - Remove the max of code smells until date 05/18.

## About:
The project is a React based, mostly made with Class Components and implemented Redux in middle of the project when I earned knowledge to apply the concept of global storage in my application and avoid prop drilling. In the beginning of the project, I want to make a Spotify clone and the required project was to make only some functionalities like favorite/unfavorite, with some restrictions about apresentation to the client, consume data from api and show in the page using React Life-Cycle.
So talking about the aesthetic side, it's a free choice and I want to go beyond and recreate the same design and functionalities of the Spotify app with Friends Activity and Player.

## Getting started:
### Before start:
1. Install [Moesif Origin & CORS Changer](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc/related) extension on Chrome to avoid 404 status error from API;
2. Activate Moesif extension plugin in Extensions icon located in topside(:jigsaw:) | **AFTER HAVING USED THE APPLICATION, TURN OFF MOESIF!**;
3. Access [neur4l.fy](https://neuralfy.vercel.app/);
4. Type your name or at least three characters in Login and Password;
5. Type the artist name in Search field;
6. Discover my application.

### If you want to clone and test locally:
1. Clone the repository using SSH;
2. Via CLI Terminal, access the folder where you cloned the repository and type __**npm i**__ in the terminal;
3. __**npm start**__.

## Skills:
> Make requisitions and consume data provided by iTunes API;\
> Use React Component Life-Cycle;\
> Control states;\
> Use route control with BrowserRouter;\
> Create routes and map the correct path;\
> Make persistent components to be showed in screen with Switch;\
> React-Redux to store in global storage;\
> Integration between app without Redux and implement Redux.

## Versions:
#### First version(branch: not connected + master):
- Leftside bar with favorite songs similar to playlists in Spotify;
- Searched musics in the 80% of the screen.
- Without Redux.

#### Second version(branch: master + canvas-v2):
- Redux integration;
- Friends activity bar;
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

## Challenges:
- Make persistent components in Desktop, optimize for Mobile and Tablet Screens;
- Begin integration with Redux, because when I started the project I hadn't the knowledge about Redux or Context API;
- UI Alignment in Album filters with listed songs in Album and Favorite routes, because they use the same component;
- Progress bar/volume bar, very difficult and it's not 100% optmized(CSS Optimization for Chrome only);
- Remove keyboard from screen;
- I didn't found a way to make a function to Zoom Out after trigger Input in mobile screens, so I used minimum requirements for some Browsers to not trigger;
- CORS errors.

## Files provided by Trybe:
src/services/\
&nbsp;&nbsp;&nbsp; ↳ favoriteSongsAPI.js\
&nbsp;&nbsp;&nbsp; ↳ musicsAPI.js\
&nbsp;&nbsp;&nbsp; ↳ userAPI.js\

## Main features according to routes:

<div align="center">
  <h4>(Any route) | Spotify® logo or Search button in leftside bar:</h4>
</div>

1. By clicking in logo, you'll be redirected to the homepage(/) with the last search.

<div align="center">
  <h4>(/) | Search bar:</h4>
</div>

1. Search albums based in artist name;
2. Render results in page;
3. Search results will be showed in the screen.
___

<div align="center">
  <h4>(/favorites) | Favorites:</h4>
</div>

1. Play and stop songs;
2. Favorite and disfavor songs;
3. Filter by title name, album name, duration time and reset filter(#);
4. User profile picture beside of Album picture. 

___

<div align="center">
  <h4>Profile:</h4>
</div>

1. Edit:\
&nbsp;&nbsp; - Name;\
&nbsp;&nbsp; - E-mail;\
&nbsp;&nbsp; - Picture(based in picture URL);\
&nbsp;&nbsp; - Description.
2. After changing the profile picture, it will be modified globally; 

___

### 03/14/2022 - 03/17/2022:

<div align="center">
  <h4>Visual implementation:</h4>
</div>

- Album total duration;
- Visual implementation for Desktop, Mobile and Tablet;\
&nbsp;&nbsp; - Conditional Header for Mobile/Tablet;\
&nbsp;&nbsp; - Conditional Navigation Links for Mobile;\
&nbsp;&nbsp; - Search field changed;\
&nbsp;&nbsp; - Profile Pattern in search, album and favorites.

<div align="center">
  <h4>Functional implementations:</h4>
</div>

- Redux implementation to handle Global State;
- Links to search albums for the selected artist;
- Links to go to the selected artist album; / Links para ir para o álbum de determinado artista;
- Links to favorites page(/favorites);\ / Link para ir ao perfil na página de músicas favoritas (/favorites);
- Added Page Control buttons;

<div align="center">
  <h4>Filters:</h4>
</div>

- Now it's possible to filter by ascendent and decrescent order, according to:\
&nbsp;&nbsp; - Title;\
&nbsp;&nbsp; - Album;\
&nbsp;&nbsp; - Duration;\
&nbsp;&nbsp; - Reset filter(#).

___

### 03/18/2022 - 03/23/2022:

- Friends Activity bar;
- Song name and artist name interactive, both redirect to the respectively aspects, like Spotify;

___

### 03/25/2022:

<div align="center">
  <h4>Fixed Bugs:</h4>
</div>

- Now after hit enter in smartphone keyboard, specifically in iOS, the keyboard fade away;

<div align="center">
  <h4>Features:</h4>
</div>

- Now, in album page, the colors are rendered dinamically based in the most relevant color in Album picture.

___

### 04/07/2022 - 05/09/2022

- All the player was developed and implemented;
- Major fixed bugs;
- Connection between favorites sidebar, album, friends sidebar and player;
- The last song played is the song showed in your next visit and can be played, like next music, previous;
- Fixed (#) filter bug, that it is not reseting to the current album;
- Play/stop in friend picture;
- Last activity marker ahead friend picture;
___

### 05/11/2022

<div align="center">
  <h4>Fixed bugs:</h4>
</div>

- Shuffler working as it be, not persistent between songs yet.

<div align="center">
  <h4>Critical Hotfix:</h4>
</div>

- Shuffle now is persistent between albums.

<div align="center">
  <h4>Known Bugs:</h4>
</div>

- Delay when favorite button is clicked inside Album(promise in usersAPI is a main cause);
- Shuffle not working correctly in favorites page.

___

<div align="center">
  <p>Project started on the day 14/02/2022 while student at Trybe and optimized in my spare time!</p>
  <p>:rocket::green_heart:</p>
  <p>neur4l ®</p>
</div>
