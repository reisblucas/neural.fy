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

### Change Logs:

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